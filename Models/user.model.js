const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String}
  })
  const UserModel = mongoose.model('user',userSchema)

  module.exports={
    UserModel
  }
  // {
  //   "name": "dhanush",
  //   "email": "dhanush",
  //   "password": "dhanush"
  // }