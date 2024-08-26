import mongoose from "mongoose";

 export const ConnectDB = async () =>{
	await mongoose.connect('mongodb+srv://foodapp:food67password@cluster0.kltzw.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}