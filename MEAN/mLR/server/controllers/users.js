var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
  create: (req,res)=>{
    console.log('in users create');
    // check if email already exists
    // check validations
    // hash pw and save user to db
    // add user to session
    console.log('This is req.body', req.body);
    User.findOne({email: req.body.email}).exec((err, user)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log(user);
        if(user){
          res.json({
            errors: {
              email:{
                message: "Please try another email"
              }
            }
          });
        } else {
          var hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9));
          console.log(hashedPW);
          var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPW
          })
          newUser.save((err, savedUser)=>{
            if(err){
              console.log('something went wrong');
              res.json(err);
            } else {
              console.log('user added to db');
              req.session.userID = savedUser._id;
              console.log('this is req.session:', req.session);
              res.json(savedUser);
            }
          })
        }
      }
    });
  },
  login: (req,res)=>{
    console.log('in users login');
  },
  getCurrent: (req,res)=>{
    User.findOne({_id: req.session.userID}, (err, foundUser)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('current user found');
        console.log(foundUser);
        res.json(foundUser);
      }
    })
  }
}
