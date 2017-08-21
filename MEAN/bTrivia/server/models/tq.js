var mongoose = require('mongoose');
var TqSchema = mongoose.Schema({
  question: {type: String, required: true, minlength:15},
  answer: {type: String, required: true, minlength:4},
  fake1: {type: String, required: true, minlength:4},
  fake2: {type: String, required: true, minlength:4},
  score: {type: Number},
  },
  {timestamps: true});
mongoose.model('Tq', TqSchema);
