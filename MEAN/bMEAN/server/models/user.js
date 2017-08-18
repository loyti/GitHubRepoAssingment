var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: {type: String, required: true, minlength:4},
  },
  {timestamps: true});
mongoose.model('User', UserSchema);
