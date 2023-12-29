import fetch from 'node-fetch';
import fs from 'fs';
import { latestCar } from '../../data/mappedData'; // Adjust the path as necessary

// Function to fetch images for a single car
const fetchImagesForCar = async (id) => {
  const encodedCredentials = process.env.ENCODED_CREDENTIALS; // Ensure this is set in your environment
  const url = `https://services.mobile.de/search-api/ad/${id}/images`;

  const headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${encodedCredentials}`,
    'Accept-Language': 'de',
  };

  try {
    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Ensure image data is in the correct format
    const images = Array.isArray(data.images.image) ? data.images.image : [data.images.image];

    // Filter and map to get URLs with 'rule-mo-1024.jpg'
    const imageUrls = images.flatMap(img =>
      img.representation
        .filter(rep => rep["@url"].includes('rule=mo-1024.jpg'))
        .map(rep => rep["@url"])
    );

    // Return an object with id and its associated images
    return { id, images: imageUrls };
  } catch (error) {
    console.error(`Failed to fetch images for car ID ${id}:`, error);
    return { id, images: [] }; // return an object with an empty array as a fallback
  }
};

// Next.js API route handler to fetch and save all images
export default async function handler(req, res) {
  try {
    let allCarImages = [];
    for (const car of latestCar) {
      const carImages = await fetchImagesForCar(car.id);
      allCarImages.push(carImages);
    }

    // Save to imageData.js
    fs.writeFileSync('src/data/imageData.js', `export const latestCarImages = ${JSON.stringify(allCarImages, null, 2)};`);

    console.log('All images saved to imageData.js with their respective car IDs');
    res.status(200).json({ message: 'Images successfully fetched and saved', count: allCarImages.length });
  } catch (error) {
    console.error('Error during image fetching and saving:', error);
    res.status(500).json({ error: error.message });
  }
}
