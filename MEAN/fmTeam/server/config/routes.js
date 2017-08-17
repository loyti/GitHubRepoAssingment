var Users = require('./../controllers/users.js');

module.exports = function(app){
  app.get('/api/users',Users.index);
  app.post('/api/users',Users.create);
  app.get('/api/users/active',Users.active)
}
