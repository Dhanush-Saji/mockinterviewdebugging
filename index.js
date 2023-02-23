const express = require('express');
const { connection} = require('./Configure/database');
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors');
const { userRouter } = require('./Routes/user.routes');
const { flightRouter } = require('./Routes/flight.routes');
const { bookingRouter } = require('./Routes/booking.routes');
const PORT  = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('Welcome')
})
app.use('/api',userRouter)
app.use('/api/flights',flightRouter)
app.use('/api/booking',bookingRouter)
app.use('/api/dashboard',bookingRouter)

app.listen(PORT,async()=>{
    console.log(`Listening on http://localhost:${PORT}`)
    try {
        await connection
        console.log('Connected to db')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
})