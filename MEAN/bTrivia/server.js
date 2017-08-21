var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'bT', 'dist')));

app.use(bodyParser.json({extended:true}));

var sessionConfig = {
  secret: 'unimagineable secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 36000000
  }
};
app.use(session(sessionConfig));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var port = 8888;
app.listen(port, function(){
  console.log('listening on port: ', port);
});
