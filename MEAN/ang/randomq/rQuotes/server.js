var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'rQuotes', 'dist')));


var port = 8080;
app.listen(port, function(){
  console.log("listening on port:", port);
});
