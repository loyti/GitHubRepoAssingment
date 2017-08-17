var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  name: {type: String, required: true},
  pPosition: {type: String, required: true},
  pActive: {type: Boolean, required: true}
});
//register the model
mongoose.model('User',UserSchema);
