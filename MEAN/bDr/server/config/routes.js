var path = require('path');
var Users = require('./../controllers/users.js');
var Apts = require('./../controllers/apts.js');

module.exports  = function(app){
  app.get('/api/users', Users.dashboard);
  app.post('/api/users', Users.create);
  app.get('/api/current_user', Users.getCurrent);
  app.post('/api/apts', Apts.create);
  app.get('/api/apts', Apts.dashboard);
  app.get('/api/adda', Apts.dashboard);
  app.get('/api/logout', Users.logout);
  // app.get('/api/players/:id', Players.show);
  // app.delete('/api/players/:id', Players.delete);
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./dr/dist/index.html"))
  });
};
