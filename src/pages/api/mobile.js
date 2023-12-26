import fetch from 'node-fetch';

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
      return false;
    }

    return await response.json();
  } catch (e) {
    error = e.message;
    return false;
  }
};

// Next.js API route handler
export default async function handler(req, res) {
  const instance = getInstance();
  const result = await execute(req.query); // Pass all query parameters to the execute function

  if (result) {
    res.status(200).send(result); // Send the XML response directly
  } else {
    const currentError = getError();
    res.status(500).json({ error: currentError });
  }
}