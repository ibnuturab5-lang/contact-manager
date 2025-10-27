import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId,required:true,ref:"User"},
    name : {type: String, required:true,},
    email : {type: String, required:true,},
    phone : {type: String, required:true,},
    place : {type: String, default:'Addis Ababa'},
},{timestamps:true});
const Contact = mongoose.model('Contact', contactSchema);
export default Contact