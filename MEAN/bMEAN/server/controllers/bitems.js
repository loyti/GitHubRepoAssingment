var mongoose = require('mongoose');
var Bitem = mongoose.model('Bitem');
var User = mongoose.model('User');

module.exports = {
  create: (req,res) => {
    console.log('create');
    console.log(req.body);
    var newBitem = new Bitem({
      bTitle: req.body.bTitle,
      bDescription: req.body.bDescription,
      bTagged: req.body.bTagged,
      bStatus: req.body.bStatus,
      bOwner: req.session.username,
    })
    newBitem.save((err,savedBitem) => {
      if(err){
        console.log('something went wrong',err);
      } else {
        console.log('creating new bucket item');
        res.json(savedBitem);
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
    Bitem.find({bOwner: req.session.username}, (err, allBitems) =>{
      if(err){
        console.log('somehting went wrong', err);
      } else {
        console.log('all bucket items found');
        res.json(allBitems);
      }
    });

  },
  // bOwner: (req, res) => {
  //   console.log('users show');
  //   // User.find({}).sort().exec((err,users)=>{
  //   //   if(err){
  //   //     console.log('something went wrong');
  //   //     res.json(err);
  //   //   } else {
  //   //     console.log('acquired all');
  //   //     res.json(users);
  //   //   }
  //   // });
  // }
}
