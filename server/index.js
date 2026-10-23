import express from "express";
import { connectToDatabase, databaseStatus } from "./db.js";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "manit-mart-api",
    database: databaseStatus(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, async () => {
  console.log(`MANIT Mart API listening on http://localhost:${port}`);
  if (!process.env.MONGODB_URI) {
    console.log("MongoDB is not configured. Add MONGODB_URI to .env to enable persistence.");
    return;
  }

  try {
    await connectToDatabase();
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
});
