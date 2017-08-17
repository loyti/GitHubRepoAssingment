import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players: object[];

  constructor(private _battleService: BattleService) { }

  getAllPlayers(){
    this._battleService.getPlayers()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.players = response;
    })
    .catch((error)=>{
      console.log('catch', error)
    })
  }
  ngOnInit() {
    this.getAllPlayers();
  }
  deletePlayer(id){
    this._battleService.deletePlayer(id)
    .then((response)=>{
  		console.log("then");
  		console.log(response);
  		this.getAllPlayers();
  	})
  	.catch((error)=>{
  		console.log("catch", error);
  	})
  }
}
