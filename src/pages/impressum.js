import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../layout/MainLayout'

const Impressum = () => {
    return (
        <MainLayout>
        <div>
        <Head>
          <title>Impressum</title>
          <meta name="description" content="Impressum von [Ihr Firmenname]" />
        </Head>
        <main>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>CarCenter Erding</p>
          <p>Otto-Hahn-Str. 4</p>
          <p>85435 Erding</p>

        <Link href="/datenschutzerklaerung">Datenschutz</Link>
  
          <h2>Vertreten durch:</h2>
          <p>K.A. Rahman</p>
  
          <h2>Kontakt:</h2>
          <p>Telefon: 08122 2280164</p>
          <p>E-Mail: info@carcenter-erding.de</p>
  
          <h2>Registereintrag:</h2>
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht:Amtsregister München</p>
          <p>Registernummer: HRA 111737 Sitz Erding</p>
  
          <h2>Umsatzsteuer:</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
          <p>DE 258108573</p>

        </main>
      </div>
      </MainLayout>
  );
}

export default Impressum;