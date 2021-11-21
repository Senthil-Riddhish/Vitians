const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const app=express();
const db=require('./db');
app.use(express.json());
const router=require('./routers');

app.use('/',router);

app.listen('8080',()=>{
    console.log("server is running ....");
})
