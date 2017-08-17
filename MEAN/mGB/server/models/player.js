var mongoose = require('mongoose');
var PlayerSchema = mongoose.Schema({
  username: {type: String},
  score: {type: Number},
  photoPath: {type: String},
  },
  {timestamps: true});
mongoose.model('Player', PlayerSchema);
