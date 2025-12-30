const Hotel =require("../../Model/Hotel/hotel");
const Room =require("../../Model/Room/room");
// Create Hotel
exports.createhotel =async(req, res) => {
    try {
        const  hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).json({message: "sucessfully create hotel"});
    } catch (error) {
        res.status(400).json({error :error.message});
    }
};

// Get all Hotels
exports.gethotel =async(req, res) => {
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

// Update Hotels 
exports.updatehotel =async(req, res) => {
    try {
       const hotel =await Hotel.findByIdAndUpdate(req.params.id, req.body,{ new: true});
       if(!Hotel) {
        return res.status(404).json({error:" Hotel not Found"}); }
        res.json(hotel);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Hotels 
exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) return res.status(404).json({ error: "Hotel not found" });
    res.json({ message: "Hotel deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message});
    }
};