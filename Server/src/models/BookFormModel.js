import mongoose from "mongoose";

const BookFormSchema = new mongoose.Schema({
 name:{type:String ,required:true,},
 email:{type:String ,required:true},
 mobile:{type:String ,required:true,},
 pickuppoint:{type:String ,required:true,},
 droppoint:{type:String ,required:true,},
 pickupdate:{type:String ,required:true,},
 pickuptime:{type:String ,required:true,},
 selecttaxi:{type:String ,required:true},
 numofpass:{type:String ,required:true},
});

export const BookFormModel =mongoose.model("bookforms",BookFormSchema);