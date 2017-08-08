var mongoose = require('mongoose');

var Cat = mongoose.model('Cat');
module.exports = {
  create: function (req, res){
    var cat = new Cat ({name: req.body.name, weight: req.body.weight, color: req.body.color});
    cat.save(function(err){
      if (err){
        console.log('something went wrong');
      }else{
        res.redirect('/');
      }
    });
  },
  show: function (req, res){
    Cat.find({ _id: req.params.id }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.render('/cats/:id', {cats: cats});
      };
  },
  new: function(req, res){
    res.redirect('/new');
  },
  update: function(req, res){
    res.redirect('/');
  },
  remove: function(req, res){
    res.redirect('/');
  }

}
