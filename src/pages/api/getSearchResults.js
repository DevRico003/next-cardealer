import connectToDatabase from '../../utils/connectToDatabase';
import { Temp } from '../../models/Temp';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const document = await Temp.findOne({ _id: id }).exec(); // Achte auf _id statt id

      if (document) {
        res.status(200).json(document);
      } else {
        res.status(404).json({ message: 'Document not found' });
      }
    } catch (error) {
      console.error('Error fetching document:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
