var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'randQ', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app, express);

var port = 8080;
app.listen(this.port, function(){
  console.log("listening on port:", port);
});
