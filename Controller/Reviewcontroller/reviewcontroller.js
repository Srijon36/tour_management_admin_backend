const Review = require("../../Model/Review/review");

/* ---------------------- CREATE ---------------------- */
// Create a new review
exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review created successfully", review });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ---------------------- READ ---------------------- */
// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get reviews by type (hotel/tour)
exports.getReviewsByType = async (req, res) => {
  try {
    const reviews = await Review.find({ type: req.params.type });
    if (!reviews.length)
      return res.status(404).json({ message: "No reviews found for this type" });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ---------------------- UPDATE ---------------------- */
// Update review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review updated successfully", review });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ---------------------- DELETE ---------------------- */
// Delete review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
