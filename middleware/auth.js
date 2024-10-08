import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next)=>{
  const {token}=req.headers;
  if(!token){
    return res.json({success:false,message:"Not Authorized Login Again"})
  }
  try{
   const token_decode=jwt.verify(token,process.env.JWT_SECRET);
   //We made a userId by using this we can add remove data into the cart
   req.body.userId=token_decode.id;
   next();
  }
  catch(err){
   console.log(err);
   res.json({success:false,message:"Error"})
  }
}

export default authMiddleware;