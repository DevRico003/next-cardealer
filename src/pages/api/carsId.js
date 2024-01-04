import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';

export default async function handler(req, res) {
  await connectToDatabase();

const { id } = req.query;

try {
  const car = await Car.findOne({ id: id }); // find all cars
  if (car) { // if car images exist
    res.status(200).json(car); // return all cars
  } else { // if car images do not exist
    res.status(404).json({ message: 'Cars not found' }); // return error
  }
} catch (error) {
  console.error('Error fetching cars:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}

}
