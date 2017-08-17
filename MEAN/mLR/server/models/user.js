var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  name: {type: String, required: true, minlength:4},
  email: {type: String, required: true, minlength: 4, unique: true},
  password: {type: String, required: true, minlength: 4}

});
mongoose.model('User', UserSchema);
