var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require( "path");
var io = require('socket.io')
var mongoose = require('mongoose');

var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);

app.get('/', function(req, res){
  res.render('index');
});

app.get('/quotes', function(req, res){
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, results){
    if(err) { console.log(err); }
    res.render('quotes', { quotes: results });
  });
});

app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});

var port = 8999;
app.listen(port, function (){
  console.log('listening on port ', port);
})
