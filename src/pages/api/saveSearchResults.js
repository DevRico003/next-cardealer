import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const id = uuidv4();
    const filePath = path.join(process.cwd(), 'temp', `${id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(req.body));

    res.status(200).json({ id });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}