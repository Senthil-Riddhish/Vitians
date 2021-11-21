const mongoose = require('mongoose');
const userModel=require('../models/user');

const userControl = async (req, res) => {
    try {
        const {
            name,
            dob,
            reg_number,
            department
        } = req.body;
        await userModel.create({
            name,
            dob,
            reg_number,
            department
        }).then(respond=>{
            res.json({status:200,message:respond});
        }).catch(respond=>{
            res.json({status:400,message:respond});
        });
    } catch (error) {
        res.json({status:400,message:error.message});
    }
};

const getUser=async(req,res)=>{
    try{
        const userDetails=await userModel.find({});
        console.log(userDetails);
        res.json({status:200,message:userDetails});
    }catch(error){
        res.json({status:400,message:error.message});
    }
};

const updateUser=async(req,res)=>{
    const{
        id
    }=req.headers;
    console.log(id);
    const{
        name,
        dob,
        reg_number,
        department
    }=req.body;
    let arrDetails=await userModel.find({});
    let getuser=arrDetails.filter(user=>{
        if(user.id==id){
            return user;
        }
    });
    console.log(getuser);
    if(getuser.length==0){
        res.json({status:400,message:"User is not available"});
    }else{
        await userModel.updateOne({id},
            {name,
            dob,
            reg_number,
            department}).then(()=>{res.json({status:200,message:"Successfully updated"})}).catch(respond=>{
                res.json({status:400,message:respond});
            });   
    }
};

const deleteUser=async(req,res)=>{

    try{
        const{
            id
        }=req.headers;
        await userModel.deleteOne({id}).then(respond=>{res.json({status:200,message:"Successfully deleted"})}).catch(respond=>{res.json({status:400,message:respond})});
    }catch(error){
        res.json({status:400,message:error.message});
    }

}

module.exports= {
    userControl,
    getUser,
    updateUser,
    deleteUser
}
