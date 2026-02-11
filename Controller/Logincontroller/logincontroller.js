const User = require("../../Model/User/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../../utils/config");

exports.createLogin =async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const user =await User.findOne({ email });
        if(!user){
            return res.status(400).json ({msg: "User Not Found!!!!", status_code: 400});
        }
        //password match 
        const ismatch = await bcrypt.comapre(password, user.password);
        if(!ismatch){
            return res.status(400).json({msg: "Invalid Password!!", status_code: 404 });
        }
        // jwt token
        const token =jwt.sign(
            { id: user.id, email: user.email, role: user.role},
            SECRET_KEY,
            {expiresIn: '24h '}
        ); 
        
        res.status(200).json({
            msg: "Login Sucessfully!!",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    }catch (err) {
        next(err);
    }
} 