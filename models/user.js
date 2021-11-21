const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "dob":{
        type:String,
        required:true
    },
    "reg_number":{
        type:String,
        required:true,
        unique:[true,"User has already registered"]
    },
    "department":{
        type:String,
        required:true
    }
});
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;
