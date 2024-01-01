// dbConnect.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectToDatabase;
