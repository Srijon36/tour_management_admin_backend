const express = require("express");
const router = express.Router();
const roomController = require("../../Controller/Roomcontroller/roomcontroller");

// create a new room
router.post("/createroom", roomController.createroom);

// get all rooms
router.get("/getroom",roomController.getroom);

// Update all Rooms by I'D
router.put("/updateroom/:id",roomController.updateroom);

//Delete all Rooms By I'D
router.delete("/deleteroom/:id",roomController.deleteroom);

module.exports =router;
