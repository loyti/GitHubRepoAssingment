var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var sessionConfig = {
  secret: "Unimaginable Secret",
  resave: false,
  saveUninitialized: true,
  name: 'amazingUserCookie',
  cookie: {
    secure:false,
    httpOnly: false,
    maxAge: 360000000
  },

}

app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'mLR', 'dist')));
app.use(bodyParser.json({extended: true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var port = 8123;
app.listen(port, function(){
  console.log('listening on port: ', port);
});
