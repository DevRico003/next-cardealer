import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const filePath = path.join(process.cwd(), 'temp', `${id}.json`);

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      res.status(200).json(JSON.parse(data));
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}