import connectToDatabase from '../../utils/connectToDatabase';
import { CarImages } from '../../models/CarImages';

export default async function handler(req, res) {
  await connectToDatabase(); // connect to database

  const { id } = req.query; // get id from query params

  try {
    const carImages = await CarImages.findOne({ id: id }); // find all cars
    if (carImages) { // if car images exist
      res.status(200).json(carImages); // return all cars
    } else { // if car images do not exist
      res.status(404).json({ message: 'Car images not found' }); // return error
    }
  } catch (error) { // if error
    console.error('Error fetching car images:', error); // log error
    res.status(500).json({ message: 'Internal Server Error' }); // return error
  }
}