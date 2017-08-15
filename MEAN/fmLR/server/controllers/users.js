var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
  create: (req,res)=>{
    console.log('in users create');
    //check if email already exists
    //pw validation
    //hash pw
    //
    req.session
  }
  login: (req,res)=>{
    console.log('in users login');
  }
}
