const TourPackage = require("../../Model/TourPackage/tourPackage");

// Create a new tour package
exports.createTourPackage = async (req, res) => {
  try {
    const tourPackage = new TourPackage(req.body);
    await tourPackage.save();
    res.status(201).json(tourPackage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tour packages
exports.getAllTourPackages = async (req, res) => {
  try {
    const tourPackages = await TourPackage.find();
    res.status(200).json(tourPackages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update tour package
exports.updateTourPackage = async (req, res) => {
  try {
    const tourPackage = await TourPackage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tourPackage)
      return res.status(404).json({ error: "Tour package not found" });
    res.status(200).json(tourPackage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete tour package
exports.deleteTourPackage = async (req, res) => {
  try {
    const tourPackage = await TourPackage.findByIdAndDelete(req.params.id);
    if (!tourPackage)
      return res.status(404).json({ error: "Tour package not found" });
    res.json({ message: "Tour package deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
