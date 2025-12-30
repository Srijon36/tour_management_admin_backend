const Booking = require("../../Model/Booking/booking");

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get bookings by user ID
exports.getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId });
    if (!bookings.length)
      return res.status(404).json({ message: "No bookings found for this user" });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get bookings by type (hotel/tour)
exports.getBookingsByType = async (req, res) => {
  try {
    const bookings = await Booking.find({ type: req.params.type });
    if (!bookings.length)
      return res.status(404).json({ message: "No bookings found for this type" });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking)
      return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking)
      return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};