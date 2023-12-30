import fetch from 'node-fetch';
import fs from 'fs'

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

// Next.js API route handler
export default async function mobileHandler(req, res) {
  // let currentPage = Number(jsonResponse["search-result"]["current-page"])
  let maxPages = null;
  let allMappedData = []; // Store all mapped data across pages

  while (maxPages === null || currentPage <= maxPages) {
    console.log(`Fetching data for page: ${currentPage}`); // Log the current page being fetched

    const queryParams = {
      ...req.query, // Spread any additional query parameters
      "customerNumber": '726774',
      "page.number": currentPage // Use the updated currentPage value
    };
    
    const result = await execute(queryParams); // Pass the updated query parameters

    if (result) {
      const jsonResponse = result;
      maxPages = Number(jsonResponse["search-result"]["max-pages"]);
      
      const mappedData = mapData(result); // Map the data for the current page
      allMappedData = allMappedData.concat(mappedData); // Append the mapped data for the current page to the total

      if (currentPage <= maxPages) {
        currentPage++; // Increment to fetch the next page in the next iteration
       } else {
        currentPage = 1;
       } 
      
      console.log(`Moving to next page: ${currentPage}`); // Log the next page to be fetched
    } else {
      const currentError = getError();
      console.error('Error fetching data for page:', currentPage, currentError);
      res.status(500).json({ error: `Failed at page ${currentPage}: ${currentError}` });
      return;
    }
  }

  // Write the final mapped data to the file
  fs.writeFile('src/data/mappedData.js', `export const latestCar = ${JSON.stringify(allMappedData, null, 2)};`, (err) => {
    if (err) {
      console.error('Error appending to file', err);
      res.status(500).json({ error: 'Failed to write to file' });
      return;
    }

    console.log('All mapped data written to mappedData.js');
    res.status(200).send(allMappedData); // Send the total mapped data as response
  });
}