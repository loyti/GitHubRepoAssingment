var path = require('path');
var Users = require('./../controllers/users.js');
var Bitems = require('./../controllers/bitems.js');

module.exports  = function(app){
  app.get('/api/users', Users.index);
  app.post('/api/users', Users.create);
  app.get('/api/current_users', Users.getCurrent);
  app.get('/api/users/:id', Users.show);
  app.get('/api/dashboard', Users.dashboard);
  app.get('/api/dashboard', Bitems.dashboard);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./bList/dist/index.html"))
  });
};
