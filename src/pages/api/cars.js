import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';

export default async function handler(req, res) {
  await connectToDatabase();

  try {
    const cars = await Car.find({}); // Modify this query as needed
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

}

