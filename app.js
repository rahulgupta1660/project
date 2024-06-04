import express from "express";
import mongoose from "mongoose";

// Schemas
import Listing from "./models/listing.js";

const app = express();

const port = 8080;

// Database connection
const MONGO_URL = "mongodb://127.0.0.1:27017/project";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connection Established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

main();

// routes

app.get("/api/listings", async (req, res) => {
  const listings = await Listing.find({});
  res.status(200).json(listings);
});

app.get("*", (req, res) => {
  res.status(200).json({
    error: "route not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
