import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Konfigurieren Sie AWS S3
      const s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
      });

      const id = uuidv4();
      const fileName = `${id}.json`;
      const fileContent = JSON.stringify(req.body);

      // Erstellen Sie die Parameter für das Hochladen in S3
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME, // Der Name Ihres S3-Buckets
        Key: fileName, // Der Dateiname im Bucket
        Body: fileContent, // Inhalt der Datei
        ContentType: 'application/json', // Setzen des Content-Types
      };

      // Hochladen der Datei in S3
      s3.upload(uploadParams, function(err, data) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
        res.status(200).json({ id });
      });
    } catch (error) {
      console.error('Fehler beim Hochladen:', error);
      res.status(500).json({ message: 'Fehler beim Speichern der Daten', error });
    }
  } else {
    res.status(405).end(); // Methode nicht erlaubt
  }
}
