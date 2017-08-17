var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
  index: (req, res)=>{
    console.log('players index');
    Player.find({}).sort('-score').exec((err,players)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('acquired all');
        res.json(players);
      }
    });
  },
  create: (req,res)=>{
    console.log('create');
    console.log(req.body);
    Player.findOne({username: req.body.player.username}).exec((err,player)=>{
      if(player){
        console.log('player already in db, updating values')
        player.score = req.body.player.score;
        player.photoPath = req.body.player.photoPath;
        player.save((err, savedPlayer)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('updated existing player, adding to session');
            if (req.body.playerNum == 1){
              req.session.playerOne = savedPlayer;
            } else {
              req.session.playerTwo = savedPlayer;
            }
            console.log('session updated: ', req.session)
            res.json(savedPlayer);
          }
        })
      } else {
        console.log('player not in db, creating new player');
        var newPlayer = new Player(req.body.player);
        newPlayer.save((err,savedPlayer)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('created new player, adding to session');
            if (req.body.playerNum == 1){
              req.session.playerOne = savedPlayer;
            } else {
              req.session.playerTwo = savedPlayer;
            }
            console.log('session updated: ', req.session);
            res.json(savedPlayer);
          }
        })
      }
    })
  },
  getCurrent: (req,res)=>{
    if(req.session.playerOne.score > req.session.playerTwo.score){
      var playerArr = [req.session.playerOne, req.session.playerTwo]
    } else {
      var playerArr = [req.session.playerTwo, req.session.playerOne]
    }
    res.json(playerArr);
  },
  show: (req,res)=>{
    console.log("in players show, this is the id", req.params.id);
    Player.findOne({_id: req.params.id}).exec((err,player)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found player", player);
				res.json(player);
			}
		})
  },
  delete: (req,res)=>{
		console.log("in the players delete")
		Player.findOne({_id: req.params.id}).remove().exec((err)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("deleted player");
				res.json({message: "player deleted"});
			}
		})
	}
}
