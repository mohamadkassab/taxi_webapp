import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema({
    name:{type:String ,required:true,},
    email:{type:String ,required:true},
    sub:{type:String ,required:true,},
    message:{type:String ,required:true,},
   });
   
   export const ContactFormModel =mongoose.model("contactform",ContactFormSchema);