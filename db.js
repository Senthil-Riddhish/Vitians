const { connect } = require('http2');
const mongoose=require('mongoose');
const url="mongodb+srv://riddhish:@cluster0.son3w.mongodb.net/Vitians?retryWrites=true&w=majority";
const db=mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('connection successful');
}).catch(()=>{
    console.log('connection failured');
})

const dbConn=mongoose.connection;
module.exports={
    dbConn
}
