import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, index: true },
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, required: true, min: 0 },
  condition: { type: String, required: true, trim: true },
  seller: { type: String, required: true, trim: true },
  emoji: { type: String, default: "📦" },
  tone: { type: String, default: "blue" },
  location: { type: String, required: true, trim: true },
}, { timestamps: true });

export const Listing = mongoose.models.Listing || mongoose.model("Listing", listingSchema);
