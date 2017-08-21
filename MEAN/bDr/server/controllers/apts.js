var mongoose = require('mongoose');
var Apt = mongoose.model('Apt');
var User = mongoose.model('User');

module.exports = {
  create: (req,res) => {
    console.log('create');
    console.log(req.body);

    var newApt = new Apt({
      aDate: req.body.aDate,
      aTime: req.body.aTime,
      aName: req.session.username,
      aReason: req.body.aReason,
    })
    newApt.save((err,savedApt) => {
      if(err){
        console.log('something went wrong',err);
      } else {
        console.log('creating new bucket item');
        res.json(savedApt);
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
    Apt.find({}, (err, apts) =>{
      if(err){
        console.log('somehting went wrong', err);
      } else {
        console.log('all apts items found');
        res.json(apts);
      }
    });

  },

}
