const mongoose = require('mongoose')
const {ObjectId} =  mongoose.Types
const bookingSchema = mongoose.Schema({
    user : { type: ObjectId, ref: 'userCollections' },
    flight : { type: ObjectId, ref: 'flightCollections' }
}
)
  const BookingModel =  mongoose.model('bookingCollections',bookingSchema)

  module.exports={
    BookingModel
  }