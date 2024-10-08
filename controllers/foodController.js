import foodModel from "../models/foodModel.js";
import fs from 'fs'



//add food item-making a instance of model and creating a document.

const addFood=async (req,res)=>{

let image_filename=`${req.file.filename}`;

const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try{
    await food.save();
    res.json({success:true,message:"Food Added"})
}
catch(error){
console.log(error)
res.json({success:false,message:"Error"})
}
}


//All food list

const listFood=async(req,res)=>{
  try{
    const foods=await foodModel.find({});
    res.json({success:true,data:foods})
  }
  catch(err){
   console.log(err);
   res.json({success:false,message:"Error"})
  }
}


//Remove food Item
const removeFood=async (req,res)=>{
    try{
       const food=await foodModel.findById(req.body._id);
       fs.unlink(`uploads/${food.image}`,()=>{}) //It will delete the image from the folder.

       await foodModel.findByIdAndDelete(req.body._id);
       res.json({success:true,message:"Food Removed"})

    }
    catch(err){
     console.log(err);
     res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}