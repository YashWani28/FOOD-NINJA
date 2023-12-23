const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body,validationResult} = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()


router.post("/createuser",
[body('email').isEmail(),
body('password',"minimum length is 5").isLength({min:5}),
body('name').isAlphanumeric()]
,async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);
    try{
        const newuser = await User.create({
            name: req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.send(newuser);
    }catch(err)
    {
        console.log(err);
        res.json(err);
    }
})


router.post("/loginuser",
[body('email').isEmail()]
,async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    let email = req.body.email;
    try{
        let user  =await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({errors:"Invalid credentials"})
        }
        const pwdCompare = await bcrypt.compare(req.body.password,user.password)
        if(!pwdCompare)
        {
            return res.status(401).json({errors:"Invalid credentials"})
        }
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,process.env.JWT_SECRET, {
            expiresIn: '1m', 
          }) 
        res.json({"success":true,"authToken":authToken});

      
    }catch(err)
    {
        console.log("hi");
        console.log(err);
        res.json(err);
    }
})


module.exports = router;
