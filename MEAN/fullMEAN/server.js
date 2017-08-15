var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'randQ', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var Quotes = require('./server/controllers/quotes.js');
app.get('/api/quotes', Quotes.index);
app.post('/api/quotes', Quotes.create);

var port = 8080;
app.listen(port, function(){
  console.log("listening on port:", port);
});
