var mongoose = require('mongoose');
var BitemSchema = mongoose.Schema({
  bTitle: {type: String, required: true, minlength:4},
  bDescription: {type: String, required: true, minlength:4},
  bOwner: {type: String, required: true},
  bStatus: {type: Boolean},
  bTagged: {type: String}
  },
  {timestamps: true});
mongoose.model('Bitem', BitemSchema);
