import fetch from 'node-fetch';
import { Car } from '../../models/Car';
import connectToDatabase from '../../utils/connectToDatabase';

let instance = null;
let error = null;
let currentPage = 1

const encodedCredentials = process.env.ENCODED_CREDENTIALS

const getInstance = () => {
  if (instance === null) {
    instance = {};
  }
  return instance;
};

const getError = () => {
  return error;
};

// Function to execute the API request
const execute = async (queryParams) => {
  try {
    const baseUrl = 'https://services.mobile.de/search-api/search';
    const url = new URL(baseUrl);

    // Hardcoded query parameter
    const queryParams = { customerNumber: '726774', "page.number": Number(currentPage) };

    // Append query parameters from the request to the URL
    Object.keys(queryParams).forEach(key => {
      url.searchParams.append(key, queryParams[key]);
    });

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`,
      'Accept-Language': 'de', 
    };



    const response = await fetch(url.toString(), { method: 'GET', headers: headers });

    if (!response.ok) {
      error = `HTTP error! status: ${response.status}, body: ${await response.text()}`;
      console.error('Error fetching data:', error);  // Log the error
      return false;
    }

    const jsonResponse = await response.json();
    console.log('API Response:', jsonResponse);  // Log the entire JSON response
    return jsonResponse;
  } catch (e) {
    error = e.message;
    console.error('Exception during fetch:', error);  // Log the exception message
    return false;
  }
};

// Function to retrieve the "$" or "@key" value from the specifics
const getValue = (item) => {
  // Check if the item is an object and not null
  if (typeof item === 'object' && item !== null) {
    // Return the "$" value if it exists
    if ("$" in item) {
      return item["$"];
    }
    // If "$" doesn't exist, check and return the "@key" value
    else if ("@key" in item) {
      return item["@key"];
    }
  }
  // Return the item itself if it's a primitive and not null or undefined
  return item || "Unknown";
};


// Function to map the data to the required structure
const mapData = (data) => {
  if (!data["search-result"] || !data["search-result"]["ads"] || !Array.isArray(data["search-result"]["ads"].ad)) {
    console.error("Unexpected data structure", data);
    return [];
  }

  return data["search-result"]["ads"].ad.map((ad) => {
    // Optional chaining to prevent accessing properties of undefined
    const category = ad?.vehicle?.category;
    const categoryDescription = category?.["local-description"]?.["$"];
    const categoryUrl = category?.["@url"];
    // Use optional chaining and nullish coalescing to safely access nested properties
    const fuelType = ad?.vehicle?.specifics?.fuel?.["local-description"]?.["$"] ?? "Unknown";
    const fuelKey = ad?.vehicle?.specifics.fuel?.["@key"];
    // Safely access the numSeats value with optional chaining and nullish coalescing
    const numSeats = ad?.vehicle?.specifics?.["num-seats"]?.["@value"] ?? "Unknown";


    if (!categoryDescription || !categoryUrl) {
      console.error("Category description or URL is undefined", ad);
    }

    // Ensure specifics is defined from the correct location
    const specifics = ad?.vehicle?.specifics;

    // Map specifics with the utility function, excluding 'fuel'
    const mappedSpecifics = {};
    for (const key in specifics) {
      if (specifics.hasOwnProperty(key) && key !== 'fuel') { // Skip the 'fuel' key
        const item = specifics[key];
        const value = getValue(item["local-description"]) ?? getValue(item);
        // Only add the key if the value is not "Unknown"
        if (value !== "Unknown") {
          mappedSpecifics[key] = value;
        }
      }
    }

    // Ensure features is defined from the correct location
    const features = ad?.vehicle?.features;

    // Map features with the utility function
    const mappedFeatures = {};
    for (const feature of features?.feature || []) {
      const key = feature["@key"];
      const value = getValue(feature["local-description"]) ?? getValue(feature);
      // Only add the key if the value is not "Unknown"
      if (value !== "Unknown") {
        mappedFeatures[key] = value;
      }
    }

    return {
      id: parseInt(ad["@key"]),
      location: `${ad?.seller?.address?.city?.["@value"]}, ${ad?.seller?.address?.["country-code"]?.["@value"]}`,
      make: ad["vehicle"]["make"]["@key"],
      carModel: `${ad?.vehicle?.make?.["local-description"]?.["$"]} ${ad?.vehicle?.model?.["local-description"]?.["$"]}`,
      mileage: `${ad?.vehicle?.specifics?.mileage?.["@value"]} km`,
      firstRegistration: ad["vehicle"]["specifics"]["first-registration"]["@value"],
      fuelTypes: [fuelType],
      isElectric: fuelKey === "HYBRID",
      power: ad["vehicle"]["specifics"]["power"]["@value"] + " PS",
      gearbox: ad["vehicle"]["specifics"]["gearbox"]["local-description"]["$"],
      numSeats: numSeats,
      price: parseFloat(ad["price"]["consumer-price-amount"]["@value"]),
      images: ad["images"]["image"]["representation"].map((img) => img["@url"]),
      category: {
        name: categoryDescription,
        slug: categoryUrl?.split('/').pop(),
      },
      // Add all other specifics mappings as needed
      ...mappedSpecifics,
      ...mappedFeatures
    };
  });
};

// Funktion, um Details für eine spezifische Car-ID erneut abzurufen
const fetchCarDetails = async (carId, maxRetries = 5) => {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const queryParams = { id: carId };
      const result = await execute(queryParams);
      if (result && result.images) {
        return result; // Return the result if images are present
      }
    } catch (e) {
      console.error(`Error fetching details for car ID ${carId}:`, e.message);
    }
    retries++;
  }
  return null; // Return null if retries exceeded without success
};

// Rekursive Funktion, um Car-Daten zu verarbeiten
const fetchAndProcessCarData = async (carId, maxRetries = 10, currentRetry = 0) => {
  if (currentRetry >= maxRetries) {
    console.log(`Max retries reached for Car ID ${carId}. Skipping...`);
    return null; // Keine weiteren Versuche, wenn die maxRetries erreicht sind
  }

  try {
    const carData = await fetchCarDetails(carId);
    if (carData && (carData.images.length > 0 || currentRetry >= maxRetries)) {
      // Bilder gefunden oder maximale Versuche erreicht
      return carData;
    } else {
      console.log(`No images for Car ID ${carId}, retrying... (${currentRetry + 1}/${maxRetries})`);
      return await fetchAndProcessCarData(carId, maxRetries, currentRetry + 1); // Rekursiver Aufruf
    }
  } catch (error) {
    console.error(`Error processing car ID ${carId}:`, error);
    return null;
  }
};

// Next.js API route handler
export default async function mobileHandler(req, res) {

  let maxPages = null;
  let allMappedData = []; // Store all mapped data across pages

  try {
    // Verbinden Sie mit der Datenbank
    await connectToDatabase();

    // Löschen aller vorhandenen Dokumente in der Car-Kollektion
    // await Car.deleteMany({});

    while (maxPages === null || currentPage <= maxPages) {
      console.log(`Fetching data for page: ${currentPage}`);

      const queryParams = {
        ...req.query,
        "customerNumber": '726774',
        "page.number": currentPage
      };

      const result = await execute(queryParams);

      if (result) {
        const jsonResponse = result;
        maxPages = Number(jsonResponse["search-result"]["max-pages"]);

        const mappedData = mapData(jsonResponse);
        allMappedData = allMappedData.concat(mappedData);

        
        for (const carData of mappedData) {
          // Prüfen, ob Bilder fehlen
          if (!carData.images || carData.images.length === 0) {
            console.log(`Images missing for Car ID ${carData.id}, refetching...`);
            const refetchedCarData = await fetchCarDetails(carData.id);
            if (refetchedCarData) {
              carData.images = refetchedCarData.images;
            } else {
              console.log(`Failed to fetch images for Car ID ${carData.id} after retries.`);
              continue; // Skip this car if images are not available
            }
          }
          // Überprüfen und aktualisieren oder einfügen von Daten
          const existingCar = await Car.findOne({ id: carData.id });
          if (existingCar) {
            await Car.updateOne({ id: carData.id }, carData);
          } else {
            await Car.create(carData);
          }
        }

        currentPage = currentPage <= maxPages ? currentPage + 1 : 1;
        console.log(`Moving to next page: ${currentPage}`);
      } else {
        const currentError = getError();
        console.error('Error fetching data for page:', currentPage, currentError);
        res.status(500).json({ error: `Failed at page ${currentPage}: ${currentError}` });
        return;
      }
    }

    console.log('Data successfully processed and saved/updated in MongoDB');
    res.status(200).send(allMappedData);
  } catch (error) {
    console.error('Error during processing:', error);
    res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}
