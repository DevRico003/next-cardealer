import fetch from 'node-fetch';
import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';
import { CarImages } from '../../models/CarImages';

// Function to fetch images for a single car
const fetchImagesForCar = async (id) => { // id is the car ID
  const encodedCredentials = process.env.ENCODED_CREDENTIALS;
  const url = `https://services.mobile.de/search-api/ad/${id}/images`;

  const headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${encodedCredentials}`,
    'Accept-Language': 'de',
  };

  try {
    const response = await fetch(url, { method: 'GET', headers }); // fetch images for a single car
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // throw an error if the status is not 200
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

  let maxPages = null;
  let allMappedData = []; // Store all mapped data across pages

  await connectToDatabase();

  try {
    // Löschen aller vorhandenen Dokumente in der CarImages-Kollektion
    await CarImages.deleteMany({});

    // Anfängliche Setup für das Blättern
    let currentPage = 1;
    let maxPages = null;

    let allCarImages = [];

    while (maxPages === null || currentPage <= maxPages) {
      const cars = await Car.find({}).skip((currentPage - 1) * 20).limit(20); // Beispiel, wie 20 Autos pro Seite abgerufen werden

      console.log(`Fetching data for page: ${currentPage}`);
      console.log('Cars fetched from database:', cars.length);

      for (const car of cars) {
        const carImages = await fetchImagesForCar(car.id);
        allCarImages.push(carImages);

        // Save to MongoDB using CarImages model
        await CarImages.updateOne({ id: car.id }, { $set: { images: carImages.images } }, { upsert: true });
      }

      if (cars.length === 0 || cars.length < 20) { // Hier können Sie eine bessere Bedingung für die maxPages festlegen
        break; // Beenden, wenn keine weiteren Autos zu verarbeiten sind
      }

      currentPage++; // Zur nächsten Seite gehen
    }

    console.log('All old data deleted and all new images saved to MongoDB with their respective car IDs');
    res.status(200).json({ message: 'Images successfully fetched and saved in MongoDB', count: allCarImages.length });
  } catch (error) {
    console.error('Error during image fetching and saving:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}