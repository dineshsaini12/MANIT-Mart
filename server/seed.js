import mongoose from "mongoose";
import { connectToDatabase } from "./db.js";
import { Listing } from "./models/Listing.js";
import { listings } from "../src/data/listings.js";

try {
  await connectToDatabase();
  const operations = listings.map((listing) => ({
    updateOne: {
      filter: { id: listing.id },
      update: { $set: listing },
      upsert: true,
    },
  }));
  const result = await Listing.bulkWrite(operations);
  console.log(`Seeded ${listings.length} listings (${result.upsertedCount} inserted, ${result.modifiedCount} updated).`);
} catch (error) {
  console.error(`Could not seed listings: ${error.message}`);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
