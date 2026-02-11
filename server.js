const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Loads .env variables

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err));

// Routes

const registerRoutes = require("./routes/registerroute/registerRouter");
const { createDefaultAdmin } = require("./Controller/Registercontroller/registercontroller");
const loginRoutes = require("./routes/loginroute/loginRoute");
const bookingRoutes = require("./routes/bookingroute/bookingRoute");
const hotelRoutes =require("./routes/hotelroute/hotelRoute");
const roomRoutes = require("./routes/roomroute/roomRoute")
const userRoutes = require("./routes/userroute/userRoute");
const reviewRoutes = require("./routes/reviewroute/reviewRoute");
const tourPackageRoutes = require("./routes/tourPackageroute/tourPackageRoute");


app.use("/api/registers", registerRoutes);
app.use("/api/logins", loginRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/users",userRoutes);
app.use("/api/hotels",hotelRoutes);
app.use("/api/rooms",roomRoutes);
app.use("/api/users",userRoutes);
app.use("/api/reviews",reviewRoutes);
app.use("/api/tourPackakge",tourPackageRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});