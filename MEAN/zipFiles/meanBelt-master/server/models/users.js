var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: {type: String, required: [true, "Name is required"]},
	items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
}, {timestamps: true});
mongoose.model('User', UserSchema);
