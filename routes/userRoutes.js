const express = require('express');
const router = express.Router();
const User = require("../models/userModels");
const bcrypt = require('bcrypt'); //install bcrypt -> to secure the password
const jwt = require('jsonwebtoken'); //
const authMiddleware = require('../middlewares/authMiddleware');// checking whether token exist or not.


router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.send({
                success: false,
                message: "User does not exist"
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            res.send({
                success: false,
                message: "Invalid password"
            })
            return;
        }

        //generating token from server and sends to client
        // Scaler_BMS - Secret key
        const token = jwt.sign({userId: user._id}, "Scaler_BMS", {expiresIn: "1d"
        });
        res.send({
            success: true,
            message: "Logged In",
            token: token
        })
    }catch(error){
        console.log(error);
    }
})


router.post('/register', async (req, res) =>{
    try{
        const userExists = await User.findOne({email: req.body.email});
        if(userExists){
            res.send({
                success: false,
                message: "User already exists"
            })
        }
      
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(req.body.password, salt);
       req.body.password = hashedPassword;
        const newUser = await User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: "user created successfully"
        })
    }catch(err){
        res.send({
            success: false,
            message: err
        })
    }
})

router.get('/get-current-user', authMiddleware, async (req, res) => {
//inform the server wheather token is valid or not, and who the user is
const user = await User.findById(req.body.userId).select("-password");
res.send({
    success: true,
    message:"You are authorised",
    data:user

})
})
module.exports = router;