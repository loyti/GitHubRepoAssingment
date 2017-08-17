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

  ngOnInit() {
    this._battleService.getCurrentPlayers()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.players = response;
    })
    .catch((error)=>{
      console.log('catch', error)
    })
  }

}
