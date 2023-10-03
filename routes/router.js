const express = require('express');
const User = require('../models/userSchema');
//const users = require('../models/userSchema');

const router = express.Router();



//register user
router.post('/register',async (req,res)=>{
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc)
    {
        res.status(404).json({err:"Invalid Request"});
    }
    try {
        const preuser = await User.findOne({email:email});
        if(preuser) {
            res.status(404).json({err:"user already registerd with this email id"});
        }
        else {
            
            // const adduser ={name,email,age,mobile,work,add,desc};
            // const response = await User.create(adduser);
            // res.status(200).json(response);
            // console.log(respone);

        // or

        const adduser = new User({
            name,email,age,mobile,work,add,desc
        })
                await adduser.save();
                res.status(200).json(adduser);
                console.log(adduser);
        }
    } catch (error) {
        res.status(404).json({error:"User cant register"});
    }
})

//user get

router.get('/getdata',async (req,res)=>{
    try {
        const userdata = await User.find();
        res.status(200).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(400).json({err:"record not fetch"});
    }
})

//get userbyid

router.get("/getuser/:id",async(req,res)=>{
try {
    const {id} = req.params;
    const user = await User.findById({_id:id});
    res.status(200).json(user);
} catch (error) {
        res.status(404).json({error:"User Not found"});
}
});

//update user
router.patch("/updateuser/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const updateduser = await User.findByIdAndUpdate(id,req.body,{new:true});
        console.log(updateduser);
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(422).json({error:"User record not upadated"})
    }
});

//delete user
router.delete('/deleteuser/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteuser = await User.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(200).json(deleteuser);
    } catch (error) {
        res.status(422).json({error:"User record not upadated"})
    }
})

module.exports = router;