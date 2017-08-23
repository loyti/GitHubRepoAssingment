var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var User = mongoose.model('User');

module.exports = {

  addBid: (req,res) => {
    console.log('adding bid');
    console.log(req.body);
    var newBid = new Bid(req.body);
    newBid.save((err,savedBid))
  //   Item.find({}).exec((err,newBid)=>
  // if(newBid){
  //
  // })
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

  bids: (req, res)=>{
    console.log('in items bidding');
    Item.find().exec((err, items)=>{
      if(err){
        console.log('error');
        res.json(err);
      } else {
        console.log('got items');
        res.json(items);
      }
    })
  },

  minimum: (req, res) => {
    console.log('in items minimum bid');
    var newBid = new Item(req.body);
  },

  results: (req, res) => {
    console.log('in items results');
    Item.find().exec((err, items)=>{
      if(err){
        console.log('error');
        res.json(err);
      } else {
        console.log('got items');
        res.json(items);
      }
    })
  }
}
