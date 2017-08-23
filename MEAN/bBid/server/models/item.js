var mongoose = require('mongoose');
var ItemSchema = mongoose.Schema({
  aItem: {type: String, name: 'auctionA', bid: ''},
  bItem: {type: String, name: 'auctionB', bid: ''},
  cItem: {type: String, name: 'auctionC', bid: ''},
},
  {timestamps: true});
mongoose.model('Item', ItemSchema);
