const express = require('express');
const mongoose = require('./db.js');

const users= require('./models/userSchema.js');
const userRoutes = require('./routes/router.js');

const cors = require('cors');


const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());



app.use('/',userRoutes);

app.listen(port,()=>{
    console.log(`app is running at port number ${port}`);
})