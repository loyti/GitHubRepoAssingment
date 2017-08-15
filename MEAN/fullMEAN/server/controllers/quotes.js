var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  index: (req,res) =>{
    console.log('in quotes index method');
    Quote.find().exec((err, quotes)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('created a new quote');
        res.json(quotes);
      }
    })
  },
  create: (req,res) =>{
    console.log('in quotes create method');
    console.log(req.body);
    var newQuote = new Quote(req.body);
    newQuote.save((err, savedQuote)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('created a new quote');
        res.json(savedQuote);
      }
    })
  }
}
