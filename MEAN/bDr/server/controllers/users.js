var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
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
            req.session.username = savedUser.username;
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
    User.findOne({username: req.session.username}, (err, foundUser)=>{
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
    console.log("in users dashboard, this is the id", req.params.id);
    User.findOne({_id: req.params.id}).exec((err,user)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found user", user);
				res.json(user);
			}
		})
  },
  logout: (req, res)=>{
		delete req.session.name;
		res.json(true);
	},
}
