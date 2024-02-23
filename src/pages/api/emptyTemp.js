import { S3 } from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const bucketName = process.env.AWS_BUCKET_NAME; // S3 Bucket name

    try {
      // list all data in the bucket
      const { Contents } = await s3.listObjects({ Bucket: bucketName }).promise();
      const deleteParams = {
        Bucket: bucketName,
        Delete: {
          Objects: Contents.map(file => ({ Key: file.Key })),
          Quiet: false,
        },
      };

      // empty the bucket
      await s3.deleteObjects(deleteParams).promise();

      res.status(200).json({ message: 'All files deleted from the bucket' });
    } catch (error) {
      console.error('Error managing files in S3:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}