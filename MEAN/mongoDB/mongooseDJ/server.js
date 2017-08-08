var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

// Tell server where views & static files are and what templating engine I'm using
app.set('views', path.join(__dirname, './client/views'));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('view engine', 'ejs');

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/cat_db");

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

var port = 8998;
app.listen(port, function(){
  console.log("Running on ", port);
});
