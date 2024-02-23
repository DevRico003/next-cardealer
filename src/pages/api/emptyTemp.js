import { S3 } from 'aws-sdk'; // Import the S3 service from AWS SDK

// This is an asynchronous function to handle API requests, specifically designed for a serverless function or API endpoint
export default async function handler(req, res) {
  // Check if the incoming request is a POST request
  if (req.method === 'POST') {
    // Initialize a new S3 instance with credentials and region from environment variables
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    // Retrieve the bucket name from environment variables
    const bucketName = process.env.AWS_BUCKET_NAME; 

    try {
      // List all objects (files) in the specified S3 bucket
      const { Contents } = await s3.listObjects({ Bucket: bucketName }).promise();

      // Prepare parameters for the deleteObjects operation by mapping each file to its key
      const deleteParams = {
        Bucket: bucketName,
        Delete: {
          Objects: Contents.map(file => ({ Key: file.Key })), // Map each file to an object with its Key
          Quiet: false, // Set to false to receive a detailed response about each file deletion
        },
      };

      // Delete all listed objects (files) from the bucket
      await s3.deleteObjects(deleteParams).promise();

      // Send a 200 OK response with a success message if the deletion was successful
      res.status(200).json({ message: 'All files deleted from the bucket' });
    } catch (error) {
      // Log the error to the console and send a 500 Server Error response with the error message
      console.error('Error managing files in S3:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    // If the request method is not POST, send a 405 Method Not Allowed response
    res.status(405).json({ message: 'Method not allowed' });
  }
}
