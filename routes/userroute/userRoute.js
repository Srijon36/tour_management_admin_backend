const express = require("express");
const router = express.Router();
const usercontroller = require("../../Controller/Usercontroller/usercontroller");

// Create user
router.post("/createusers", usercontroller.getuser);

// Get all users
router.get("/user", usercontroller.getalluser);

// Get user by ID
router.get("/user/:id", usercontroller.getbyid);

// Update user
router.put("/user/:id", usercontroller.updateuser);

// Delete user
router.delete("/user/:id", usercontroller.deleteuser);

module.exports = router;