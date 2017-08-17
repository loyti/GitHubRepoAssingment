var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var app = express();

var sessionConfig = {
  secret: "Unimaginable Secret",
  resave: false,
  saveUninitialized: true,
  cookie: {secure:true},
  maxAge: 36000000
}

app.use(session(sessionConfig));

app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'fmTeam', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// var Quotes = require('./server/controllers/quotes.js');
// app.get('/api/quotes', Quotes.index);
// app.post('/api/quotes', Quotes.create);

var port = 8111;
app.listen(port, function(){
  console.log("listening on port:", port);
});
