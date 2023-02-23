const express = require('express');
const { UserModel } = require('../Models/user.model');
const userRouter = express.Router()

userRouter.get('/',(req,res)=>{
    res.status(200).send(`You are in user`)
})
//////////////////////////////////////////
userRouter.post('/register',async(req,res)=>{
    try {
        const user = new UserModel(req.body)
        const data = await user.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send(`Error saving user: ${error.message}`)
    }
})
//////////////////////////////////////////
userRouter.post('/login',async(req,res)=>{
    let {email, password} = req.body
    try {
        const data = await UserModel.find({email})
        if(data.length>0){

            res.status(201).json(data)
        }
        else{
            res.status(201).json('Invalid credentials')
        }
    } catch (error) {
        res.status(500).send(`Error saving user: ${error.message}`)
    }
})
module.exports={
    userRouter
}