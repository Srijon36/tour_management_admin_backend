const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import route files
const registerRotes = require("./routes/registerroute/registerRouter");
const loginRotes = require("./routes/loginroute/loginRoute");
const userRoutes = require("./routes/userroute/userRoute");
const hotelRoutes = require("./routes/hotelroute/hotelRoute");
const bookingRoutes = require("./routes/bookingroute/bookingRoute");
const roomRoutes = require("./routes/roomroute/roomRoute");
const reviewRoutes = require("./routes/reviewroute/reviewRoute");
const tourPackageRoutes = require("./routes/tourPackageroute/tourPackageRoute");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("🏨 Welcome to Hotel Management API!");
});

// Mount routes
app.use("/api/registers",registerRotes);
app.use("/api/logins",loginRotes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms",roomRoutes);
app.use("/api/reviews",reviewRoutes);
app.use("/api/tourPackakge",tourPackageRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res.status(500).json({ message: err.message || "Server Error" });
});

module.exports = app;
