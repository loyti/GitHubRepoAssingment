var mongoose = require('mongoose');
var Bitem = mongoose.model('Bitem');

module.exports = {
  index: (req, res) => {
    console.log('users index');
    // User.find({}).sort('').exec((err,users)=>{
    //   if(err){
    //     console.log('something went wrong');
    //     res.json(err);
    //   } else {
    //     console.log('acquired all');
    //     res.json(users);
    //   }
    // });
  },
  create: (req,res) => {
    console.log('create');
    console.log(req.body);
    User.findOne({username: req.body.username}).exec((err,user)=>{
      if(user){
        console.log('user already in db, updating values')
        user.username = req.body.username;
        user.save((err, savedUser)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('updated existing user, adding to session');
            req.session.userId = savedUser._id;
            console.log('session updated: ', req.session)
            res.json(savedUser);
          }
        })
      } else {
        console.log('user not in db, creating new user');
        var newUser = new User({username: req.body.username});
        newUser.save((err,savedUser) => {
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('created new user, adding to session');
            req.session.user = savedUser;
            console.log('session updated: ', req.session);
            res.json(savedUser);
          }
        })
      }
    })
  },
  getCurrent: (req,res) => {
    User.findOne({_id: req.session.userId}, (err, foundUser)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('current user found');
        console.log(foundUser);
        res.json(foundUser);
      }
    })
  },
  dashboard: (req, res) => {
    console.log('users index');
    User.find({}).sort('').exec((err,users)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('acquired all');
        res.json(users);
      }
    });
  },
  show: (req, res) => {
    console.log('users show');
    // User.find({}).sort('').exec((err,users)=>{
    //   if(err){
    //     console.log('something went wrong');
    //     res.json(err);
    //   } else {
    //     console.log('acquired all');
    //     res.json(users);
    //   }
    // });
  }
}
