const User  = require('../models/user');
const express = require("express");
const router = express.Router();


router.get('/users',async (req,res)=>{
    try{
        const users = await User.find();
        res.send(users);
    }catch(error){
        res.json({
            text:"Some error occurred!!",
        });
        console.log(error);
    }
});

router.post('/users',async (req,res)=>{
    try{
        const user = await new User(req.body).save();
        res.json({
            text:"User Added Successfully!!",
            user,
        });
        res.send(user);
    }catch(error){
        res.json({
            text:"Some error occurred!!"
        });
        console.log(error);
    }
    
});

router.put('/users/:id',async (req,res)=>{

    try{
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.json({
            text:"User Added Successfully!!",
            user,
        });
        res.send(user);
    }catch(error){
        res.json({
            text:"Some error occurred!!"
        });
        console.log(error);
    }
    
});

router.delete('/users/:id',async (req,res)=>{

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({
            text:"User Deleted Successfully!!"
        });
        
    } catch (error) {
        res.json({
            text:"Some error occurred!!"
        });
        console.log(error)
    }
    
});


module.exports = router;