var path = require('path');
var Players = require('./../controllers/players.js');

module.exports  = function(app){
  app.get('/api/players', Players.index);
  app.post('/api/players', Players.create);
  app.get('/api/current_players', Players.getCurrent);
  app.get('/api/show', Players.show);

};
