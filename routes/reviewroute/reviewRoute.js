const express = require("express");
const router = express.Router();
const reviewController = require("../../Controller/Reviewcontroller/reviewcontroller");

// Create a new review
router.post("/createreview", reviewController.createReview);

// Get all reviews
router.get("/getreview", reviewController.getAllReviews);

// Get reviews by type (for example: hotel, tour, package, etc.)
router.get("/getreview/:type", reviewController.getReviewsByType);

// Get a single review by ID
router.get("/getreviewbyid/:id", reviewController.getReviewById);

// Update a review by ID
router.put("/updatereview/:id", reviewController.updateReview);

// Delete a review by ID
router.delete("/deletereview/:id", reviewController.deleteReview);

module.exports = router;
