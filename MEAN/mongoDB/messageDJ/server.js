var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost/messageDJ', function(err, db){
	if(err){
		console.log("error here");
		console.log(err);
	}
});

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true, minlength: 4},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model("Message", MessageSchema);

var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	text: {type: String, required: true, minlength: 4},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

mongoose.model("Comment", CommentSchema);

var Comment = mongoose.model("Comment");

app.get("/", function(req, res){
  console.log(Message);
	Message.find({}, false, true).populate('_comments').exec(function(err, messages){
	      res.render('index.ejs', {messages: messages});
	});
});

app.post("/message", function(req, res){
	var newMessage = new Message({name: req.body.name, message: req.body.message});
	newMessage.save(function(err){
		if(err){
			console.log(err);
			res.render('index.ejs', {errors: newMessage.errors});
		} else {
			console.log("success");
			res.redirect('/');
		}
	});
});

app.post("/comment/:id", function(req, res){
	var message_id = req.params.id;
	Message.findOne({_id: message_id}, function(err, message){
		var newComment = new Comment({name: req.body.name, text: req.body.comment});
		newComment._message = message._id;
		Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){

		});
		newComment.save(function(err){
			if(err){
				console.log(err);
				res.render('index.ejs', {errors: newComment.errors});
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});

var port = 8765;

app.listen(port, function(){
	console.log("server running on port 8765");
});
