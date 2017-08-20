var path = require('path');
var Users = require('./../controllers/users.js');
var Bitems = require('./../controllers/bitems.js');

module.exports  = function(app){
  app.post('/api/users', Users.create);
  app.get('/api/current_user', Users.getCurrent);
  app.get('/api/users/:id', Users.dashboard);
  // app.get('/api/dashboard', Users.dashboard);
  app.get('/api/dashboard', Bitems.dashboard);
  app.post('/api/bucketItems', Bitems.create);
  app.get('/api/bucketItems', Bitems.dashboard);
  app.get('/api/allUsers', Users.showAll);
  // app.get('/api/users/:user', Users.userInfo);
  // app.get('/api/bucketOwner', Bitems.bOwner);
  // app.get('/api/users/logout', Users.logout)
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./bList/dist/index.html"))
  });
};
