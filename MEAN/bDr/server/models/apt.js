var mongoose = require('mongoose');
var AptSchema = mongoose.Schema({
  aDate: {type: Date, required: true},
  aTime: {type: Date, required: true},
  aName: {type: String},
  aReason: {type: String, required: true, minlength: 10},
  aTagged: {type: String}
  },
  {timestamps: true});
mongoose.model('Apt', AptSchema);
