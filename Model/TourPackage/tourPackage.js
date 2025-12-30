const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  destination: { type: String, required: true },
  durationDays: Number,
  pricePerPerson: Number,
  startDate: Date,
  endDate: Date,
  image: String,
  includes: [String],
  availableSlots: { type: Number, default: 20 }
});

module.exports = mongoose.model("TourPackage", tourPackageSchema);