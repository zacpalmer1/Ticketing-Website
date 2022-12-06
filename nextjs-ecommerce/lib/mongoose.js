import mongoose from 'mongoose';

const MONGODB_URL =
  'mongodb+srv://grayson:Gh10497802@soupcluster.bmu8wxf.mongodb.net/TeamSoup?retryWrites=true&w=majority';

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(MONGODB_URL);
}
