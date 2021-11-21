const express=require('express');

const Router=express.Router();

const{
    userControl,
    getUser,
    updateUser,
    deleteUser
}=require('./controllers/user.controller');

Router.post('/addUser',userControl);
Router.get('/getUsers',getUser);
Router.put('/updateUser',updateUser);
Router.delete('/deleteuser',deleteUser);

module.exports=Router;

