var path = require('path');
var Users = require('./../controllers/users.js');
var Tqs = require('./../controllers/tqs.js');

module.exports  = function(app){
  app.post('/api/users', Users.create);
  app.get('/api/current_user', Users.getCurrent);
  app.get('/api/dashboard', Users.dashboard);
  app.get('/api/logout', Users.logout);
  app.post('/api/tqs', Tqs.create);
  app.get('/api/dashboard', Tqs.dashboard);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./bT/dist/index.html"))
  });
};
