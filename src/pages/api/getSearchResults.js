import { S3 } from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'GET') { // if request is a GET request
    const { id } = req.query; // get id from query params
    const s3 = new S3({  
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME, // Der Name Ihres S3-Buckets
      Key: `${id}.json`, // Der Dateiname im Bucket
    };

    try {
      const { Body } = await s3.getObject(params).promise(); // get file from S3
      const data = Body.toString('utf-8'); // convert file to string
      res.status(200).json(JSON.parse(data)); // return file
    } catch (error) {
      if (error.code === 'NoSuchKey') {
        res.status(404).json({ message: 'File not found' });
      } else {
        console.error('Error fetching file from S3:', error);
        res.status(500).json({ message: 'Server error', error });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
