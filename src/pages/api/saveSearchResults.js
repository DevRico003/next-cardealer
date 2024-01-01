import { Temp } from '../../models/Temp';
import connectToDatabase from '../../utils/connectToDatabase';

export default async function handler(req, res) {
  console.log('Request body:', req.body);
  if (req.method === 'POST') {
    try {
      // Verbinden Sie mit der Datenbank
      await connectToDatabase();

      // Erstellen Sie ein neues Dokument mit den Daten aus dem Request-Body
      const newTemp = new Temp(req.body);
      console.log('Daten, die gespeichert werden sollen:', newTemp);
      // if (!req.body.fuelTypes || !req.body.images) {
      //   return res.status(400).json({ error: 'Missing required fields' });
      // }
      // Speichern des Dokuments in der Datenbank
      await newTemp.save();

      res.status(200).json({ id: newTemp._id });
    } catch (error) {
      console.error('Failed to save the data:', error);
      res.status(500).json({ error: 'Failed to save the data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
