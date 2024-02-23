// Import required modules and utilities
import fetch from 'node-fetch';
import { Car } from '../../models/Car';
import connectToDatabase from '../../utils/connectToDatabase';

// Constants
const BASE_URL = 'https://services.mobile.de/search-api/search';
const DETAILS_BASE_URL = 'https://services.mobile.de/search-api/ad/';
const CUSTOMER_NUMBER = '726774';
const ENCODED_CREDENTIALS = process.env.ENCODED_CREDENTIALS;
const ACCEPT_LANGUAGE = 'de';

// Singleton pattern for instance management
let instance = null;

// Error handling variable
let error = null;

// Current page tracking for pagination
let currentPage = 1;

// Retrieves or initializes the singleton instance
const getInstance = () => instance ??= {};

// Gets the last occurred error
const getError = () => error;

// Executes the API request with given query parameters
const executeApiRequest = async () => {
  try {
    const url = new URL(BASE_URL);
    // Set query parameters including customer number and current page
    url.searchParams.append('customerNumber', CUSTOMER_NUMBER);
    url.searchParams.append('page.number', currentPage.toString());

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${ENCODED_CREDENTIALS}`,
      'Accept-Language': ACCEPT_LANGUAGE,
    };

    const response = await fetch(url.toString(), { method: 'GET', headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    error = e.message;
    throw e; // Rethrow to handle it in the caller function
  }
};

// Fetches details for a specific car ID
const fetchCarDetailsWithImages = async (carId) => {
  try {
    const url = `${DETAILS_BASE_URL}${carId}`;
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${ENCODED_CREDENTIALS}`,
      'Accept-Language': ACCEPT_LANGUAGE,
    };

    const response = await fetch(url, { method: 'GET', headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(`Error fetching details for car ID ${carId}:`, e.message);
    return null; // Return null to indicate failure
  }
};

// Utility function to extract value from item specifics
const getValue = (item) => {
  if (typeof item === 'object' && item !== null) {
    return item["$"] ?? item["@key"] ?? "Unknown";
  }
  return item ?? "Unknown";
};

// Maps API data to the required structure for the application
const mapData = (data) => {
  if (!data["search-result"]?.["ads"]?.ad?.length) {
    console.error("Unexpected data structure", data);
    return [];
  }

  return data["search-result"]["ads"].ad.map(ad => { 
    const specifics = ad?.vehicle?.specifics || {};
    const features = ad?.vehicle?.features?.feature || [];

    const mappedSpecifics = Object.keys(specifics).reduce((acc, key) => {
      if (key !== 'fuel') {
        const value = getValue(specifics[key]["local-description"]) ?? getValue(specifics[key]); 
        if (value !== "Unknown") acc[key] = value;
      }
      return acc;
    }, {});

    const mappedFeatures = features.reduce((acc, feature) => {
      const key = feature["@key"]; // Extract key
      const value = getValue(feature["local-description"]) ?? getValue(feature); // Extract local description
      if (value !== "Unknown") acc[key] = value; // Only add if value is not "Unknown"
      return acc;
    }, {});

    return {
      id: parseInt(ad["@key"]),
      location: `${ad?.seller?.address?.city?.["@value"]}, ${ad?.seller?.address?.["country-code"]?.["@value"]}`,
      make: ad["vehicle"]["make"]["@key"],
      carModel: `${ad?.vehicle?.make?.["local-description"]?.["$"]} ${ad?.vehicle?.model?.["local-description"]?.["$"]}`,
      mileage: `${ad?.vehicle?.specifics?.mileage?.["@value"]} km`,
      firstRegistration: ad["vehicle"]["specifics"]["first-registration"]["@value"],
      fuelTypes: [getValue(ad?.vehicle?.specifics?.fuel?.["local-description"]) ?? "Unknown"],
      isElectric: ad?.vehicle?.specifics.fuel?.["@key"] === "HYBRID",
      power: `${ad["vehicle"]["specifics"]["power"]["@value"]} kW`,
      gearbox: getValue(ad["vehicle"]["specifics"]["gearbox"]["local-description"]), // Extract local description
      numSeats: getValue(ad?.vehicle?.specifics?.["num-seats"]?.["@value"]), // Extract value from @value
      price: parseFloat(ad["price"]["consumer-price-amount"]["@value"]), // Convert to float
      category: {
        name: getValue(ad?.vehicle?.category?.["local-description"]), // Extract name from local description
        slug: ad?.vehicle?.category?.["@url"]?.split('/').pop(), // Extract slug from URL
      },
      ...mappedSpecifics, // Add mapped specifics to the object
      ...mappedFeatures, // Add mapped features to the object
    };
  });
};

// API route handler to process and store car data
export default async function mobileHandler(req, res) {
  try {
    await connectToDatabase();
    await Car.deleteMany({}); // Clear existing entries for simplicity

    let maxPages = null;
    let allMappedData = [];

    do {
      console.log(`Fetching data for page: ${currentPage}`);
      const data = await executeApiRequest();
      maxPages = parseInt(data["search-result"]["max-pages"], 10);

      const mappedData = mapData(data);
      allMappedData.push(...mappedData);

        for (const carData of mappedData) {
          const detailedCarData = await fetchCarDetailsWithImages(carData.id);
          if (detailedCarData && detailedCarData.ad && detailedCarData.ad.images && detailedCarData.ad.images.image) {
            const imagesArray = Array.isArray(detailedCarData.ad.images.image) ? detailedCarData.ad.images.image : [detailedCarData.ad.images.image];
            carData.images = imagesArray.map(img => img.representation[1]['@url']);
          }
          await Car.findOneAndUpdate({ id: carData.id }, carData, { upsert: true });
        }

        currentPage = currentPage + 1;
    } while (currentPage <= maxPages);

    res.status(200).send(allMappedData);
  } catch (e) {
    console.error('Error during processing:', e);
    res.status(500).json({ error: e.message || 'Unknown error occurred' });
  }
}