const express =require("express");
const router =express.Router();
const registerController =require("../../Controller/Registercontroller/registercontroller");

const {protect}= require("../../Middleware/authMiddleware");

router.post("/create-register", registerController.createregister);
router.post("/create-register-admin",registerController.createDefaultAdmin);

module.exports = router;