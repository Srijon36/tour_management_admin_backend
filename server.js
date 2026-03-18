const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err));

// Import routes
const registerRoutes = require("./routes/registerroute/registerRouter");
const loginRoutes = require("./routes/loginroute/loginRoute");
const bookingRoutes = require("./routes/bookingroute/bookingRoute");
const hotelRoutes = require("./routes/hotelroute/hotelroute");
const roomRoutes = require("./routes/roomroute/roomRoute");
//const userRoutes = require("./routes/userroute/userRoute");
const reviewRoutes = require("./routes/reviewroute/reviewRoute");
const tourPackageRoutes = require("./routes/tourPackageroute/tourPackageRoute");

// Use routes
app.use("/api/registers", registerRoutes);
app.use("/api/logins", loginRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/hotel", hotelRoutes);
app.use("/api/room", roomRoutes);
//app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/tourPackage", tourPackageRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Tour Management Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});