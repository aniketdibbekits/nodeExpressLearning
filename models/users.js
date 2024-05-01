const mongoose = require('mongoose');

//schema for user
const User = mongoose.model('User',{
    firstName : String,
    lastName : String,
    email : String,
    avatar : String
  
  })


  module.exports = User;