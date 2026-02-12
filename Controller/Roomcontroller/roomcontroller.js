const Room = require("../../Model/Room/room");
const Hotel = require("../../Model/Hotel/hotel");

// ---------------- CREATE ROOM ----------------
exports.createroom = async (req, res) => {
  try {
    const { hotel, roomType, pricePerNight, capacity, available, images } = req.body;

    // Check if hotel exists
    const existingHotel = await Hotel.findById(hotel);
    if (!existingHotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    const room = new Room({
      hotel,
      roomType,
      pricePerNight,
      capacity,
      available,
      images
    });

    await room.save();

    // Push room ID into Hotel
    await Hotel.findByIdAndUpdate(hotel, {
      $push: { rooms: room._id }
    });

    res.status(201).json({
      message: "Room created successfully",
      room
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ---------------- GET ALL ROOMS ----------------
exports.getroom = async (req, res) => {
  try {
    const rooms = await Room.find().populate("hotel");
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ---------------- UPDATE ROOM ----------------
exports.updateroom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json({
      message: "Room updated successfully",
      room
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ---------------- DELETE ROOM ----------------
exports.deleteroom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    // Remove room reference from Hotel
    await Hotel.findByIdAndUpdate(room.hotel, {
      $pull: { rooms: room._id }
    });

    res.status(200).json({
      message: "Room deleted successfully"
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
