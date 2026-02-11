const uuidv4 = require("uuidv4");
const User = require("../../Model/User/user");
const jwt =requite("jsonwebtoken");
const bcrypt = require("bcrypt");
const {SECRET_KEY} =require("../../utils/config");

// ------------------------ CREATE USER ------------------------
exports.createregister = async (req, res, next) => {
  try {
    const { name, email, password, phone, confirm_password } = req.body;

    if (password !== confirm_password) {
      return res.status(400).json({ msg: "Invalid password!!", status_code: 400 });
    }

    const existing_email = await User.findOne({ email });
    if (existing_email) {
      return res.status(400).json({ msg: "Email already registered!!!", status_code: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      id: uuid4(),
      name,
      email,
      phone,
      password: hashedPassword,
      role: "customer",
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      msg: "User registered successfully!!",
      status_code: 201,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ------------------------ CREATE DEFAULT ADMIN ------------------------
exports.createDefaultAdmin = async () => {
  try {
    const adminEmail = "admin@yopmail.com";
    const existingAdmin = await User.findOne({ email: adminEmail });



    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("12345", 10);
      const newAdmin = new User({
        id: uuid4(),
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        phone: "0000000000"
      });

      await newAdmin.save();

      const token = jwt.sign(
        { id: newAdmin.id, email: newAdmin.email, role: newAdmin.role },
        SECRET_KEY,
        { expiresIn: "24h" }
      );

      console.log("---------------------------------------------------------");
      console.log("Admin created successfully!");
      console.log(`Email: ${adminEmail}`);
      console.log(`Password: 12345`);
      console.log(`Token: ${token}`);
      console.log("---------------------------------------------------------");
    } else {
      console.log("Admin already exists.");
    }
  } catch (err) {
    console.error("Error creating default admin:", err);
  }
};