import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://zahid:zahid634@cluster0.u4olg.mongodb.net/food-del').then(()=>console.log('DB Connected'));

}