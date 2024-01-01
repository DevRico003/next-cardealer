import connectToDatabase from '../../utils/connectToDatabase';
import { CarImages } from '../../models/CarImages';

export default async function handler(req, res) {
  await connectToDatabase();

  const { id } = req.query;

  try {
    const carImages = await CarImages.findOne({ id: id });
    if (carImages) {
      res.status(200).json(carImages);
    } else {
      res.status(404).json({ message: 'Car images not found' });
    }
  } catch (error) {
    console.error('Error fetching car images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}