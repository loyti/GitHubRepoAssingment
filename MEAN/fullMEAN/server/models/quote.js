var mongoose = require('mongoose');
var QuoteSchema = mongoose.Schema({
  qname: {type: String, required:true},
  quote: {type: String, required:true}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
