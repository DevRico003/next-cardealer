import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const directory = path.join(process.cwd(), 'temp');

    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
          }
        });
      }

      res.status(200).json({ message: 'Temp folder emptied' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}