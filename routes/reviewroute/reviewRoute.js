const express = require("express");
const router = express.Router();
const reviewController = require("../../Controller/Reviewcontroller/reviewcontroller");

// Create a new review
router.post("/create-review", reviewController.createReview);

// Get all reviews
router.get("/get-reviews", reviewController.getAllReviews);

// Get review by ID
router.get("/get-review/:id", reviewController.getReviewById);

// Get reviews by type (hotel/tour)
router.get("/get-reviews/type/:type", reviewController.getReviewsByType);

// Update review
router.put("/update-review/:id", reviewController.updateReview);

// Delete review
router.delete("/delete-review/:id", reviewController.deleteReview);

module.exports = router;
