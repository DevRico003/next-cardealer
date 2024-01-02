import fetch from 'node-fetch';
import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';
import { CarImages } from '../../models/CarImages';

// Function to fetch images for a single car
const fetchImagesForCar = async (id) => {
  const encodedCredentials = process.env.ENCODED_CREDENTIALS;
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
export default async function fetchCarImagesHandler(req, res) {
  await connectToDatabase();

  try {
    const cars = await Car.find({});
    console.log('Cars fetched from database:', cars);

    let allCarImages = [];
    for (const car of cars) {

      const carImages = await fetchImagesForCar(car.id);
      allCarImages.push(carImages);

      // Save to MongoDB using CarImages model
      await CarImages.updateOne({ id: car.id }, { $set: { images: carImages.images } }, { upsert: true });
    }

    console.log('All old data deleted and all new images saved to MongoDB with their respective car IDs');
    res.status(200).json({ message: 'Images successfully fetched and saved in MongoDB', count: allCarImages.length });
  } catch (error) {
    console.error('Error during image fetching and saving:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}
