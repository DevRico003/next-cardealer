import connectToDatabase from '../../utils/connectToDatabase';
import { Temp } from '../../models/Temp'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Verbinden Sie mit der Datenbank
      await connectToDatabase();

      // Löschen aller Dokumente in der Temp-Kollektion
      // Das ist äquivalent zum Leeren des temp-Verzeichnisses
      await Temp.deleteMany({});

      res.status(200).json({ message: 'All documents in Temp collection deleted' });
    } catch (error) {
      console.error('Failed to delete documents:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
