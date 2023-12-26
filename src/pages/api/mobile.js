import fetch from 'node-fetch';
import fs from 'fs'

let instance = null;
let error = null;

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
    const queryParams = { customerNumber: '726774' };

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

    if (!categoryDescription || !categoryUrl) {
      console.error("Category description or URL is undefined", ad);
    }

    return {
      id: parseInt(ad["@key"]),
      location: `${ad?.seller?.address?.city?.["@value"]}, ${ad?.seller?.address?.["country-code"]?.["@value"]}`,
      carModel: `${ad?.vehicle?.make?.["local-description"]?.["$"]} ${ad?.vehicle?.model?.["local-description"]?.["$"]}`,
      mileage: `${ad?.vehicle?.specifics?.mileage?.["@value"]} km`,
      fuelTypes: [fuelType],
      isElectric: fuelKey === "HYBRID",
      priceCategory: "N/A", // Assuming this data is not available
      price: parseFloat(ad["price"]["consumer-price-amount"]["@value"]),
      images: ad["images"]["image"]["representation"].map((img) => img["@url"]),
      category: {
        name: categoryDescription,
        slug: categoryUrl?.split('/').pop(),
      },
    };
  });
};


// Next.js API route handler
export default async function handler(req, res) {
  const instance = getInstance();
  const result = await execute(req.query); // Pass all query parameters to the execute function

  if (result) {
    const mappedData = mapData(result); // Map the data

    // Save the mapped data to a file
    fs.writeFile('mappedData.js', `export const latestCars = ${JSON.stringify(mappedData, null, 2)};`, (err) => {
      if (err) {
        console.error('Error writing to file', err);
        res.status(500).json({ error: 'Failed to write to file' });
        return;
      }

      console.log('Mapped data saved to mappedData.js');
      res.status(200).send(mappedData); // Send the mapped data as response
    });
  } else {
    const currentError = getError();
    res.status(500).json({ error: currentError });
  }
}


/* // Mapping of the full api call
const mapData = (data) => {
  return data["search-result"]["ads"]["ad"].map((ad) => ({
    id: ad["@key"],
    url: ad["@url"],
    creationDate: ad["creation-date"]["@value"],
    modificationDate: ad["modification-date"]["@value"],
    detailPageUrl: ad["detail-page"]["@url"],
    vehicle: {
      class: ad["vehicle"]["class"]["$"],
      category: ad["vehicle"]["category"]["$"],
      make: ad["vehicle"]["make"]["$"],
      model: ad["vehicle"]["model"]["$"],
      modelDescription: ad["vehicle"]["model-description"]["@value"],
      roadworthy: ad["vehicle"]["roadworthy"]["@value"] === "true",
    },
    specifics: {
      mileage: ad["vehicle"]["specifics"]["mileage"]["@value"] + " km",
      firstRegistration: ad["vehicle"]["specifics"]["first-registration"]["@value"],
      fuelType: ad["vehicle"]["specifics"]["fuel"]["$"],
      power: ad["vehicle"]["specifics"]["power"]["@value"] + " HP",
      gearbox: ad["vehicle"]["specifics"]["gearbox"]["$"],
      numSeats: ad["vehicle"]["specifics"]["num-seats"]["@value"],
      cubicCapacity: ad["vehicle"]["specifics"]["cubic-capacity"]["@value"] + " cc",
      condition: ad["vehicle"]["specifics"]["condition"]["$"],
    },
    price: {
      amount: ad["price"]["consumer-price-amount"]["@value"],
      currency: ad["price"]["@currency"],
      vatRate: ad["price"]["vat-rate"]["@value"],
    },
    seller: {
      id: ad["seller"]["@key"],
      type: ad["seller"]["type"]["@value"],
      location: `${ad["seller"]["address"]["city"]["@value"]}, ${ad["seller"]["address"]["country-code"]["@value"]}`,
      coordinates: {
        latitude: ad["seller"]["coordinates"]["latitude"],
        longitude: ad["seller"]["coordinates"]["longitude"],
      },
    },
    images: ad["images"]["image"]["representation"].map((rep) => rep["@url"]),
    highlights: ad["highlights"] ? ad["highlights"]["highlight"] : null,
    description: ad["description"],
  }));
};

*/