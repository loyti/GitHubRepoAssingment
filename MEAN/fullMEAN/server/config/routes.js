var Quotes = require('./../controllers/quotes.js');

module.exports = function(app){
  app.get('/api/quotes', Quotes.index);
  app.post('/api/quotes', Quotes.create);
}
