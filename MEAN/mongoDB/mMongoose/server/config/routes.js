var mongoose = require('mongoose');

var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
  // Routes go here!
  app.get('/', function(req, res){
    Cat.find({}, function(err, results){
      if (err) { console.log(err); }
      res.render('index', { cats: results });
    });
  });

  // Create
  app.post('/cats', function(req, res){
    // Create a new cat!
    Cat.create(req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/')
    });
  });

  // New
  app.get('/cats/new', function(req, res){
    res.render('new');
  });

  // Show
  app.get('/cats/:id', function(req, res){
    Cat.findOne({ _id: req.params.id }, function(err, result) {
      if (err) { console.log(err); }
      console.log(result);
      res.render('show', { cat: result });
    });
  });

  app.get('/cats/:id/edit/', function(req, res){
    Cat.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { cat: response[0] });
    })
  });

  // Update
  app.post('/cats/:id', function(req, res){
    Cat.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });

  // Delete
  app.post('/cats/:id/delete', function(req, res){
    Cat.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
};
