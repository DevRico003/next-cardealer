<?php

namespace DXIM;

class MOBILEAdapter {

    protected static $instance = null;
    protected $user;
    protected $password;
    protected $pageSize = 100;

    protected $error = null;

    /**
     *
     * @return MOBILEAdapter
     */
    public static function getInstance() {
        if(self::$instance === null) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function getError() { return $this->error; }

    /**
     * @param $query
     * @return bool|string
     */
    function execute($query){
        if(empty($this->user) || empty($this->password)) {
            $this->error = 'Mobile.de Account-Daten fehlen';
            return false;
        }

        try {
            $curl = curl_init('https://services.mobile.de/search-api/'.$query);

            $headers = array(
                'Content-Type:application/json',
                'Authorization: Basic '. base64_encode($this->user.":".$this->password),
                'Accept-Language: de'
            );
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($curl, CURLOPT_FAILONERROR, true);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

            $response = curl_exec($curl);
            $curl_error = curl_error($curl);
            curl_close($curl);

            if($curl_error){
                $this->error = $curl_error.' (Account: '.$this->user.')';
                return false;
            }

        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            return false;
        }

        return $response;
    }

    /**
     * @param $account
     * @return array|false
     */
    public function setup($import_id, $account) {
        $this->user = $account['user'];
        $this->password = $account['password'];

        $pageNumber = 1;
        $fetched = 0;
        $total = 1;
        $z = 0;
        $ads = array();

        // solange weniger datensätze von mobile geladen wurden, als es insgesamt gibt
        // nächste seite laden
        while($fetched < $total) {
            $xml = $this->execute('search?page.size='.$this->pageSize.'&page.number='.$pageNumber);

            if(!$xml) return false;
            try {
                $xmlObj = simplexml_load_string($xml);
                if(gettype($xmlObj) !== 'object') {
                    $warning = error_get_last();
                    $msg = 'Der XML-Stream konnte nicht gelesen werden<br />Fehler: '.$warning['message'].'<br />Aktivieren Sie ggf. die Fehlerausgabe (wp-config.php debug) um weitere Infos zu erhalten';
                    throw  new \ErrorException($msg);
                }

            } catch(\Exception $e) {
                $this->error = $e->getMessage();
                return false;
            }

            $total = strval($xmlObj->xpath('//search:total')[0]);
            $adsTmp = $xmlObj->xpath('//ad:ad');

            if(!empty($adsTmp)) {
                foreach($adsTmp as $ad) { $ads[] = $ad; }
            }

            // anzahl empfangener datensätze updaten
            $fetched += count($adsTmp);

            // nächste Seite laden
            $pageNumber++;

            //
            $z++;
            if($z > 10000) break;

        }

        $data = [];
        $data['total'] = $total;
        foreach($ads as $ad) {
            $mod_date_mobile = XML::attr($ad,'ad:modification-date','value');
            $hash = hash("md5",$mod_date_mobile);
            $vehicle = [
                'ad_key' => strval($ad->attributes()->key),
                'hash' => $hash
            ];
            $data['vehicles'][] = $vehicle;
        }

        Import::getInstance()->vehicles_count($total);

        if(file_put_contents(Import::getInstance()->get_import_dir($import_id)."/".$account['user'].".json", json_encode($data)) !== false) return true;
        else return false;
    }


    /**
     * originaldatensatz von mobile.de holen
     * @return \SimpleXMLElement
     */
    public function getVehicle($index, $import_id, $account) {
        $this->user = $account['user'];
        $this->password = $account['password'];
        $options = Admin::getInstance()->getOptions();

        $jsonString = file_get_contents(Import::getInstance()->get_import_dir($import_id)."/".$account['user'].".json");
        $json = json_decode($jsonString, true);
        $data = $json['vehicles'][$index] ?? null;
        if(is_null($data)) {
//            Sync::extLog("kein Fahrzeug zu index ".$index." gefunden");
            return 1;
        }

        $ad_key = $data['ad_key'];
        $hash = $data['hash'];

        /**
         * chwck what to do
         */
        $v = new Vehicle();
        $vehicle = $v->createImportDataset($ad_key, $hash);
        if(is_null($vehicle['import_data']['do'])) return $vehicle;

        // get ad from mobile
        try {
            $xml = $this->execute('ad/'.$ad_key);
            Sync::extLog("Api Call für ".$ad_key);
            $ad = simplexml_load_string($xml);
            if(gettype($ad) !== 'object') {
                Sync::log("Api Antwort ungültig für Key ".$ad_key);
                return 0;
            }

        } catch(\Exception $e) {
            $this->status_msg = $e->getMessage();
            return 0;
        }

        // Post Data
        $descriptionNodeName = ($options['api_options']['description'] == 'enriched') ? 'enrichedDescription' : 'description';
        $content = XML::node($ad,'ad:'.$descriptionNodeName);

        // make
        $make_key = XML::attr($ad,'ad:vehicle/ad:make','key');
        $make = Make::_get($make_key);
        $seller_inventory_key = XML::attr($ad,'ad:seller-inventory-key','value');
        if(empty($seller_inventory_key)) $seller_inventory_key = $ad_key;

        $post_title = $make.' '.XML::attr($ad,'ad:vehicle/ad:model-description','value');
        $vehicle['post_data'] = array(
            'post_title' => $post_title,
            'post_content' => $content,
            'post_name' => Html::sanitize_title($post_title.'-'.$seller_inventory_key)
        );

        /** -------------------------------
         * fill meta data array
         */
        $meta = array(
            'seller_inventory_key' => $seller_inventory_key,
            'ad_location' => $account['location'],
            'ad_account' => $account['user'],
            'ad_key' => $ad_key,
            'import_hash' => $hash,
            'detail_page' => XML::attr($ad,'ad:detail-page','url'),
            'dealer_price' => XML::attr($ad,'ad:price/ad:dealer-price-amount','value'),
            'consumer_price' => XML::attr($ad,'ad:price/ad:consumer-price-amount','value'),
            'vatable' => XML::attr($ad,'ad:price/ad:vatable','value'),
            'vat_rate' => XML::attr($ad,'ad:price/ad:vat-rate','value'),
            'price_type' => XML::attr($ad,'ad:price','type'),
            'price_rating' => XML::attr($ad,'ad:price-rating/ad:label','key'),

            // vehicle type and model
            'class' => XML::attr($ad,'ad:vehicle/ad:class','key'),
            'category' => XML::attr($ad,'ad:vehicle/ad:category','key'),
            'make' => XML::attr($ad,'ad:vehicle/ad:make','key'),
            'model' => str_replace("'","",XML::attr($ad,'ad:vehicle/ad:model','key') ?? ""),
            'model_description' => XML::attr($ad,'ad:vehicle/ad:model-description','value'),
        );

        /**
         * financing
         */
        // https://services.mobile.de/schema/common/financing-1.0.xsd
        $meta['financing_annual_percentage_rate'] = XML::node($ad,'financing:financing/financing:annual-percentage-rate');
        $meta['financing_nominal_interest_rate'] = XML::node($ad,'financing:financing/financing:nominal-interest-rate');
        $meta['financing_type_of_nominal_interest_rate'] = XML::node($ad,'financing:financing/financing:type-of-nominal-interest-rate');
        $meta['financing_first_installment'] = XML::node($ad,'financing:financing/financing:first-installment');
        $meta['financing_monthly_installment'] = XML::node($ad,'financing:financing/financing:monthly-installment');
        $meta['financing_final_installment'] = XML::node($ad,'financing:financing/financing:final-installment');
        $meta['financing_payback_period'] = XML::node($ad,'financing:financing/financing:payback-period');
        $meta['financing_net_loan_amount'] = XML::node($ad,'financing:financing/financing:net-loan-amount');
        $meta['financing_gross_loan_amount'] = XML::node($ad,'financing:financing/financing:gross-loan-amount');
        $meta['financing_closing_costs'] = XML::node($ad,'financing:financing/financing:closing-costs');
        $meta['financing_payment_protection_insurance'] = XML::node($ad,'financing:financing/financing:payment-protection-insurance');
        $meta['financing_bank'] = XML::node($ad,'financing:financing/financing:bank');

        /**
         * Leasing
         */
        // https://services.mobile.de/schema/common/leasing-1.0.xsd
//        $meta['leasing_rate_type'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:type');
//        $meta['leasing_down_payment'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:down-payment');
//        $meta['leasing_term_of_contract'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:term-of-contract');
//        $meta['leasing_annual_mileage'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:annual-mileage');
//        $meta['leasing_total_amount'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:total-amount');
//        $meta['leasing_gross_rate'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:gross-rate');
//        $meta['leasing_net_rate'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:net-rate');
//        $meta['leasing_net_loan_amount'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:net-loan-amount');
//        $meta['leasing_annual_percentage_rate'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:annual-percentage-rate');
//        $meta['leasing_nominal_interest_rate'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:nominal-interest-rate');
//        $meta['leasing_destination_charges'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:destination-charges');
//        $meta['leasing_registration_fees'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:registration-fees');
//        $meta['leasing_extra_mileage_costs'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:extra-mileage-costs');
//        $meta['leasing_low_mileage_compensation'] = XML::node($ad,'leasing-rate:leasing-rate/leasing-rate:low-mileage-compensation');
//        $meta['leasing_lender'] = XML::node($ad,'leasing:leasing/leasing:lender');

        #$meta['leasing_type'] = XML::node($ad,'leasing-type:leasing-type/');


        /**
         * Highlights
         */
        foreach($ad->xpath('ad:highlights/ad:highlight') as $highlight) {
            $meta['highlight'][] = strval($highlight);
        }

        /**
         * SPECIFICS
         */
        // Farbe
        $meta['specific_exterior_color'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:exterior-color','key');

        // Herstellerfarbe
        $meta['specific_manufacturer_color'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:exterior-color/ad:manufacturer-color-name','value');

        // Kilometer
        $meta['specific_mileage'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:mileage','value');

        // Abgasinspaektion
        $meta['specific_exhaust_inspection'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:exhaust-inspection','value');

        // HU
        $meta['specific_general_inspection'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:general-inspection','value');

        // delivery date
        $meta['specific_delivery_date'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:delivery-date','value');

        // delivery period
        $meta['specific_delivery_period'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:delivery-period','value');

        // Türen
        $meta['specific_door_count'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:door-count','key');

        // Erstzulassung (als Timestamp sichern)
        $meta['specific_first_registration'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:first-registration','value');

        // Emission
        $meta['specific_emission_class'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-class','key');
        $meta['specific_emission_sticker'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-sticker','key');
        $meta['specific_emission_co2'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','co2-emission');
        $meta['specific_emission_inner'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','inner');
        $meta['specific_emission_outer'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','outer');
        $meta['specific_emission_combined'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','combined');
        $meta['specific_emission_power_combined'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','combined-power-consumption');
        $meta['specific_emission_unit'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','unit');
        $meta['specific_emission_energy_efficiency_class'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:emission-fuel-consumption','energy-efficiency-class');

        // wltp
        $meta['specific_wltp_consumption_fuel_combined'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:consumption-fuel-combined');
        $meta['specific_wltp_co2_emission_combined'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:co2-emission-combined');
        $meta['specific_wltp_consumption_power_combined'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:consumption-power-combined');
        $meta['specific_wltp_electric_range'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:electric_range');
        $meta['specific_wltp_consumption_fuel_combined_weighted'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:consumption-fuel-combined-weighted');
        $meta['specific_wltp_consumption_power_combined_weighted'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:consumption-power-combined-weighted');
        $meta['specific_wltp_co2_emission_combined_weighted'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:wltp-values/ad:co2-emission-combined-weighted');

        // Kraftstoff
        $meta['specific_fuel'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:fuel','key');

        // KW Leistung
        $meta['specific_power'] =  XML::attr($ad,'ad:vehicle/ad:specifics/ad:power','value');

        // PS Leistung
        $meta['specific_power_ps'] = round($meta['specific_power'] * 1.35962);

        // schwacke code
        $meta['specific_schwacke_code'] =  XML::attr($ad,'ad:vehicle/ad:specifics/ad:schwacke-code','value');

        // Schaltung
        $meta['specific_gearbox'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:gearbox','key');

        // Gesamtgewicht
        $meta['specific_licensed_weight'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:licensed-weight','value');

        // Achsen
        $meta['specific_axles'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:axles','value');

        // Ladegewicht
        $meta['specific_load_capacity'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:load-capacity','value');

        // Sitze
        $meta['specific_num_seats'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:num-seats','value');

        // Betriebsstunden
        $meta['specific_operating_hours'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:operating-hours','value');

        //
        $meta['specific_installation_height'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:installation-height','value');

        // Hubkraft
        $meta['specific_lifting_capacity'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:lifting-capacity','value');

        // Hubhöhe
        $meta['specific_lifting_height'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:lifting-height','value');

        // Baujahr
        $meta['specific_construction_year'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:construction-year','value');
        $meta['specific_construction_date'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:construction-date','value');

        // Hubraum
        $meta['specific_cubic_capacity'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:cubic-capacity','value');

        // Zustand
        $meta['specific_condition'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:condition','key');

        // Art des Zustands
        $meta['specific_usage_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:usage-type','key');

        // Schlafplätze
        $meta['specific_number_of_bunks'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:number-of-bunks','value');

        // Maße
        $meta['specific_dimension_length'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:dimension','length');
        $meta['specific_dimension_width'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:dimension','width');
        $meta['specific_dimension_height'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:dimension','height');

        // Loading Space
        $meta['specific_loading_space_length'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:loading-space','length');
        $meta['specific_loading_space_width'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:loading-space','width');
        $meta['specific_loading_space_height'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:loading-space','height');

        // europallet_storage_spaces
        $meta['specific_europallet_storage_spaces'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:europallet-storage-spaces','value');

        // shipping-volume
        $meta['specific_europallet_shipping_volume'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:shipping-volume','value');

        // VIN / FIN
        $meta['specific_identification_number'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:identification-number','value');

        // Farbe innen
        $meta['specific_interior_color'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:interior-color','key');

        // Interior
        $meta['specific_interior_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:interior-type','key');

        // Airbag
        $meta['specific_airbags'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:airbag','key');

        // Vorbesitzer
        $meta['specific_number_owners'] = XML::node($ad,'ad:vehicle/ad:specifics/ad:number-of-previous-owners');

        // Video Url
        $meta['specific_video_url'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:videoUrl','key');

        // countryVersion
        $meta['specific_country_version'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:countryVersion','key');

        $meta['specific_battery'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:battery','key');
        $meta['specific_battery_capacity'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:battery-capacity','value');

        // Produktionsdatum
        $meta['specific_first_models_production_date'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:first-models-production-date','value');

        /**
         * UNFALL
         */
        $meta['specific_damage_unrepaired'] = (XML::attr($ad,'ad:vehicle/ad:damage-and-unrepaired','value'));
        $meta['specific_roadworthy'] = (XML::attr($ad,'ad:vehicle/ad:roadworthy','value'));
        $meta['specific_accident_damaged'] = (XML::attr($ad,'ad:vehicle/ad:accident-damaged','value'));


        /**
         * FEATURES
         */
        foreach($ad->xpath('ad:vehicle/ad:features/ad:feature') as $feature) {
            $featureKey = strval($feature->attributes()->key);
//            $meta['feature_'.$featureKey] = XML::node($feature,null,true);
            $meta['feature_'.strtolower($featureKey)] = $featureKey;
        }

        // Parkassistent
        // from specific to feature
        $meta['feature_parking_assistants'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:parking-assistants/ad:parking-assistant','key');

        // Klimaanlage
        // from specific to feature
        $meta['feature_climatisation'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:climatisation','key');

        // Tempomat
        // from specific to feature
        $meta['feature_speed_control'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:speed-control','key');

        // Radio
        // from specific to feature
        $meta['feature_radio'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:radio/ad:radio-type','key');

        // Tagfahrlicht
        $meta['feature_daytime_running_lamps'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:daytime-running-lamps','key');

        // Schiebetür
        $meta['specific_sliding_door_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:sliding-door-type','key');

        // Scheinwerfer
        // from specific to feature
        $meta['feature_headlight_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:headlight-type','key');

        // Kurvenlicht
        // from specific to feature
        $meta['feature_bending_lights_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:bending-lights-type','key');

        // Pannenhilfe
        $meta['feature_breakdown_service'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:breakdown-service','key');

        // Trailer Coupling Type
        $meta['feature_trailer_coupling_type'] = XML::attr($ad,'ad:vehicle/ad:specifics/ad:trailer-coupling-type','key'); // NEW

        /**
         * IMAGES
         */
        $imageObj = $ad->xpath('ad:images/ad:image');
        $images = array('small'=>array(),'large'=>array(),'big'=>array());
        foreach($imageObj as $image) {
            $image_small = strval($image->xpath('ad:representation[@size="L"]')[0]->attributes()->url);
            $image_large = strval($image->xpath('ad:representation[@size="XL"]')[0]->attributes()->url);
            $image_big = strval($image->xpath('ad:representation[@size="XXXL"]')[0]->attributes()->url);

            $images['small'][] = $image_small;
            $images['large'][] = $image_large;
            $images['big'][] = $image_big;
        }
        if(!empty($images))  $meta['images'] = $images;

        // get Post Meta Data
        $vehicle['post_meta'] = $meta;

        return $vehicle;
    }


}