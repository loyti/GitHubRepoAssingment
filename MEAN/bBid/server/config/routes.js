var path = require('path');
var Users = require('./../controllers/users.js');
var Items = require('./../controllers/items.js');

module.exports  = function(app){
  app.post('/api/users', Users.create);
  app.get('/api/current_user', Users.getCurrent);
  app.get('/api/dashboard', Users.dashboard);
  app.get('/api/dashboard/bids', Items.bids);
  app.post('/api/newBid', Items.addBid);
  app.get('/api/dashboard/results', Items.results);
  app.get('/api/logout', Users.logout);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./bid/dist/index.html"))
  });
};
