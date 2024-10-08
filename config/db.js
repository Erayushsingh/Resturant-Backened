import mangoose from 'mongoose';

export const connectDB=async ()=>{
    await mangoose.connect('mongodb+srv://ayushsingh74340:Ayushcseiitm1234@cluster0.jlvgv.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0')
    .then(console.log("DB Connected"))
}
