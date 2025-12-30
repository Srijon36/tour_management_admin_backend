const express = require("express");
const router = express.Router();
const bookingController = require("../../Controller/Bookingcontroller/bookingcontroller");

// Create a new booking
router.post("/create-booking", bookingController.createBooking);

// Get all bookings
router.get("/get-bookings", bookingController.getAllBookings);

// Get booking by ID
router.get("/get-booking/:id", bookingController.getBookingById);

// Get bookings by user ID
router.get("/get-bookings/user/:userId", bookingController.getBookingsByUser);

// Get bookings by type (hotel/tour)
router.get("/get-bookings/type/:type", bookingController.getBookingsByType);

// Update booking
router.put("/update-booking/:id", bookingController.updateBooking);

// Delete booking
router.delete("/delete-booking/:id", bookingController.deleteBooking);

module.exports = router;