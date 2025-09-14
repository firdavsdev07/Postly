import { MongoClient } from "mongodb";

export default async function connectDB() {
  try {
    const mongoDB = new MongoClient(process.env.MONGODB_URL);
    await mongoDB.connect();
    const db = mongoDB.db("postly");
    console.info(`🚀 mongodb connected successfully`);
    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}
