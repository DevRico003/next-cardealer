import connectToDatabase from '../../utils/connectToDatabase';
import { Car } from '../../models/Car';

export default async function handler(req, res) {
  await connectToDatabase();

const { id } = req.query;

try {
  const car = await Car.findOne({ id: id });
  if (car) {
    res.status(200).json(car);
  } else {
    res.status(404).json({ message: 'Cars not found' });
  }
} catch (error) {
  console.error('Error fetching cars:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}

}
