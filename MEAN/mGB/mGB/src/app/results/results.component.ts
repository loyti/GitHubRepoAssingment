import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  players: object[];
  constructor(private _battleService: BattleService) { }

  ngOnInit() {
    this._battleService.getCurrentPlayers()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.players = response;
    })
  }

}
