import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator";


//Login User

const loginUser=async (req,res)=>{
const {email,password}=req.body;
try{
    const user=await userModel.findOne({email});
    if(!user){
    res.json({success:false,message:"User Does not exist."})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.json({success:false,message:'Invalid Credentials'})
    }

    const token=createToken(user._id);
    res.json({success:true,token})
}
catch(err){
console.log(err)
res.json({success:false,message:"Error"})
}
}


// Creating Token

//We use userid as data and createda a token for the user and return the token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}




//register user

const registerUser=async (req,res)=>{
    const {name,password,email}=req.body;
    try{
        //Checking is user already exist
     const exist=await userModel.findOne({email});
    if(exist){
        return res.json({success:false, message:"User Already Exist"})
     }
     //validating email formate & strong password
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please enter a valid email"})
     }
    
     if(password.length<8){
        return res.json({success:false, message:"Please enter a strong possword of min length 8"})
     }
    
     //Hashing user password
     const salt= await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(password,salt);
    
     const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
     })
     //Save methode will save the newUser in database.
     const user = await newUser.save()
     const token=createToken(user._id);
     res.json({success:true,token})
    
    }
    catch(err){
    console.log(err);
    res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}