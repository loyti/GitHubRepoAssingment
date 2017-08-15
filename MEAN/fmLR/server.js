var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var sessionConfig = {
  secret: "This is a secret",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
  maxAge: 36000
}

var app = express();

app.use(bodyParser.json({extended:true}));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'logReg', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var port = 8888;

app.listen(this.port, function(){
  console.log('listening on port,', port)
})
