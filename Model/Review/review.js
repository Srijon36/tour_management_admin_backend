const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["hotel", "tour"], required: true },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  tourPackage: { type: mongoose.Schema.Types.ObjectId, ref: "TourPackage" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);