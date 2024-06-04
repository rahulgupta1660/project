import mongoose from "mongoose";

import Listing from "../models/listing.js";

import sampleListings from "./data.js";

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

const init = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
  console.log("data was initialized");
};

init();
