var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt')
module.exports = {
  index: (req,res)=>{
    console.log('')
  },
  create: (req,res)=>{
    // create a new user
    console.log('in users create method');
  },
  active: (req,res)=>{
    console.log('in active method');
    // user is active
  },
  unActive: (req,res)=>{
    console.log('in unActive method')
    // user is not active
  }
}
