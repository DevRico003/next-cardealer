import fetch from 'node-fetch';
import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';
import { CarImages } from '../../models/CarImages';

const ENCODED_CREDENTIALS = process.env.ENCODED_CREDENTIALS; // Use environment variable for credentials
const BASE_IMAGE_URL = 'https://services.mobile.de/search-api/ad';
const ACCEPT_LANGUAGE = 'de';
const CAR_PER_PAGE = 20; // Define a constant for the number of cars to fetch per page
const IMAGE_RULE = 'rule=mo-1024.jpg'; // Specific image rule to filter by

// Function to fetch images for a single car using its ID
const fetchImagesForCar = async (id) => {
  const url = `${BASE_IMAGE_URL}/${id}/images`;
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${ENCODED_CREDENTIALS}`,
    'Accept-Language': ACCEPT_LANGUAGE,
  };

  try {
    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Normalize image data format and filter for specific image rule
    const images = Array.isArray(data.images.image) ? data.images.image : [data.images.image];
    const imageUrls = images.flatMap(img =>
      img.representation
        .filter(rep => rep["@url"].includes(IMAGE_RULE))
        .map(rep => rep["@url"])
    );

    return { id, images: imageUrls };
  } catch (error) {
    console.error(`Failed to fetch images for car ID ${id}:`, error);
    return { id, images: [] };
  }
};

// API route handler to fetch and save car images
export default async function fetchCarImagesHandler(req, res) {
  await connectToDatabase();

  try {
    // Clear existing documents in CarImages collection
    await CarImages.deleteMany({});
    let currentPage = 1;
    let allCarImages = [];

    while (true) {
      const cars = await Car.find({}).skip((currentPage - 1) * CAR_PER_PAGE).limit(CAR_PER_PAGE);

      if (cars.length === 0) break; // Exit loop if no cars found

      for (const car of cars) {
        const carImages = await fetchImagesForCar(car.id);
        allCarImages.push(carImages);

        // Save/update car images in MongoDB
        await CarImages.updateOne({ id: car.id }, { $set: { images: carImages.images } }, { upsert: true });
      }

      currentPage++; // Increment page for next iteration
      if (cars.length < CAR_PER_PAGE) break; // Check if last page reached
    }

    res.status(200).json({ message: 'Images successfully fetched and saved in MongoDB', count: allCarImages.length });
  } catch (error) {
    console.error('Error during image fetching and saving:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}
