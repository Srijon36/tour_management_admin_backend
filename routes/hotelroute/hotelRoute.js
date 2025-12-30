const express = require("express");
const router = express.Router();
const hotelController = require("../../Controller/Hotelcontroller/hotelcontroller");

// create Hotel
router.post("/createhotel",hotelController.createhotel);

//Get all Hotels
router.get("/gethotel",hotelController.gethotel);

// Update Hotels
router.put("/updatehotel/:id",hotelController.updatehotel);

// Delete Hotels
router.delete("/deletehotel/:id",hotelController.deleteHotel);

module.exports =router;