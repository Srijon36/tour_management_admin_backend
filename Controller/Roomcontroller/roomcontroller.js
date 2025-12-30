const Room = require("../../Model/Room/room");
const Hotel = require("../../Model/Hotel/hotel");

// create room
exports.createroom = async (req, res) => {
  try {
    const room = new Room(req.body); // ✅ FIXED
    await room.save();

    await Hotel.findByIdAndUpdate(room.hotel, { $push: { rooms: room._id } });

    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// get all rooms
exports.getroom =async(req, res) => {
  try {
    const room = await Room.find();
    res.json(room);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

//Update rooms
exports.updateroom =async(req, res) => {
try {
  const room = await Room.findByIdAndUpdate(req.params.id,req.body, {new: true});
  if(!room) return res.status(404).json({error: "Room not Found"});
  res.json(room);
} catch (error) {
  res.status(400).json({ error: err.message });
}
};

// Delete rooms
exports.deleteroom =async(req, res) => {
  try {
    const room =await Room.findByIdAndDelete(req.params.id);
    if(!room) return res.status(404).json({error: "Room not found"});
    res.json({message: "Room Delete Sucessfully"});
  } catch (error) {
    res.status(400).json({error: err.message});
  }
};
