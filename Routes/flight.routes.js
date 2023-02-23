const express = require('express');
const { FlightModel } = require('../Models/flight.model');
const flightRouter = express.Router()
//////////////////////////////////////////
flightRouter.get('/',async(req,res)=>{
    try {
        const data = await FlightModel.find({})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Error getting flight: ${error.message}`)
    }
})
//////////////////////////////////////////
flightRouter.get('/:id',async(req,res)=>{
    const ID = req.params.id
    try {
        const data = await FlightModel.find({_id:ID})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Error getting flight: ${error.message}`)
    }
})
//////////////////////////////////////////
flightRouter.delete('/:id',async(req,res)=>{
    const ID = req.params.id
    try {
        const data = await FlightModel.findByIdAndDelete({_id:ID})
        res.status(202).send(data)
    } catch (error) {
        res.status(500).send(`Error deleting flight: ${error.message}`)
    }
})
//////////////////////////////////////////
flightRouter.patch('/:id',async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    try {
        const data = await FlightModel.findByIdAndUpdate({_id:ID},payload)
        res.status(204).send(data)
    } catch (error) {
        res.status(500).send(`Error updating flight: ${error.message}`)
    }
})
//////////////////////////////////////////
flightRouter.post('/',async(req,res)=>{
    try {
        const flight = new FlightModel(req.body)
        const data = await flight.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send(`Error saving flight: ${error.message}`)
    }
})

module.exports={
    flightRouter
}

// {
//     "airline": "test2",
//     "flightNo": "test2_123",
//     "departure": "Delhi",
//     "arrival": "Kochi",
//     "departureTime": "March 03, 2023 16:00:00",
//     "arrivalTime": "March 03, 2023 21:00:00",
//     "seats": 50,
//     "price": 8000
//   }