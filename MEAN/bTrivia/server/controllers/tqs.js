var mongoose = require('mongoose');
var Tq = mongoose.model('Tq');

module.exports = {
  create: (req,res) => {
    console.log('create');
    console.log(req.body);
    Tq.find({question: req.body.question}).exec((err,tq)=>{
      if(tq){
        console.log('question already in db, updating values')
        Tq.save((err, savedTq)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('updated existing question, adding to session');
            res.json(savedTq);
          }
        })
      } else {
        console.log('questino not in db, creating new question');
        var newTq = new Tq({
          question: req.body.question,
          answer: req.body.answer,
          fake1: req.body.fake1,
          fake2: req.body.fake2
        });
        newTq.save((err,savedTq) => {
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('created new question');
            Tq = savedTq;
            res.json(savedTq);
          }
        })
      }
    })
  },
  dashboard: (req, res) => {
    console.log("in trivia questions dashboard");
    Tq.find({}).exec((err,tq)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found questions", tq);
				res.json(tq);
			}
		})
  },
}
