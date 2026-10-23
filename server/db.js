import "dotenv/config";
import mongoose from "mongoose";

export async function connectToDatabase(uri = process.env.MONGODB_URI) {
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it to your .env file first.");
  }

  await mongoose.connect(uri);
  return mongoose.connection;
}

export function databaseStatus() {
  return mongoose.connection.readyState === 1 ? "connected" : "disconnected";
}
