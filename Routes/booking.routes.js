const express = require('express');
const { BookingModel } = require('../Models/booking.model');
const bookingRouter = express.Router()

//////////////////////////////////////////
bookingRouter.post('/',async(req,res)=>{
    try {
        const user = new BookingModel(req.body)
        const data = await user.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send(`Error saving booking details: ${error.message}`)
    }
})
//////////////////////////////////////////
bookingRouter.get('/',async(req,res)=>{
    try {
        const user = await BookingModel.find({})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(`Error getting booking details: ${error.message}`)
    }
})
module.exports={
    bookingRouter
}