import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';

export default async function handler(req, res) {
  await connectToDatabase(); // connect to database

  try {
    const cars = await Car.find({}); // find all cars
    res.status(200).json(cars); // return all cars
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

}

