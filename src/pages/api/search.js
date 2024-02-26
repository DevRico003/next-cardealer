import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';

export default async function handler(req, res) {
  await connectToDatabase();

  const { make, budget } = req.query;

  try {
    // create a query object
    let query = {};

    // filter by make, if specified
    if (make) {
      query.make = make;
    }

    // filter by price, if specified
    if (budget) {
      query.price = { $lte: parseFloat(budget) };
    }

    // Fetch cars from the database
    const cars = await Car.find(query);

    // return the cars as JSON
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
