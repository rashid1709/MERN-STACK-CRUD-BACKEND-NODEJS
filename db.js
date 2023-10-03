const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to mongodb database');
}).catch((err)=>{
    console.log('mongodb database connection error',err);
   
})
module.exports = mongoose;
