const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        if (!name || !email || !password){
            return res.status(500).json({
                success:false,
                message:"Fill details properly",
            })
        }
        // Checking that user does not exist
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(500).json({
                success:false,
                message:"User already exists",
            })
        }

        // Hashing password
        const hashedPassword = await bcrypt.hash(password,10);

        // Creating new user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        res.status(200).json({
            success:true,
            message:"User created successfully"
        })


    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}

exports.login = async (req,res) => {
    const {email,password} = req.body;
    
    if (!email || !password){
            return res.status(500).json({
                success:false,
                message:"Fill details properly",
            })
        }

    // Finding user in the database
    const user = await User.findOne({email});

    // If there is no such user exist
    if (!user){
        return res.status(400).json({
            success:false,
            message:"User does not exist",
        })
    }

    // Matching password
    const isMatch = await bcrypt.compare(password,user.password);

    // If password does not matches
    if (!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid credentials",
        })
    }

    // Generate JWT Token
    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    );

    return res.status(200).json({
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        }
    })







}