import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import { orderRouter } from "./routes/orderRoute.js"

//app config
const app=express()
const port=8001

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))//Here basically we mounted the uploads folder with /images end point.
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})


//Run express server
app.listen(port,()=>{
    console.log(`Server Started on Port : ${port}`)
})

