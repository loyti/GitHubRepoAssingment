import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  playerOne: object = {username: '', photoPath: '', score: ''};
  playerTwo: object = {username: '', photoPath: '', score: ''};
  playerOneFound: boolean = false;
  playerTwoFound: boolean = false;

  constructor(private _battleService: BattleService, private _router:Router) { }

  ngOnInit() {
  }
  addPlayer(playerNum, playerObj){
    console.log(playerObj);
    this._battleService.getInfo(playerObj)
    .then((response)=>{
      console.log('then');
      console.log(response);
      switch (playerNum){
        case 1:
          this.playerOne = {
            username: response.name,
            photoPath: response.avatar_url,
            score: (response.public_repos+response.followers)*12,
          };
          this.playerOneFound = true;
          this._battleService.addPlayer(1, this.playerOne)
          .then((response)=>{
            console.log('then');
            console.log('response');
          })
          .catch((error)=>{
            console.log('catch',error)
          });
          break;
        case 2:
          this.playerTwo = {
            username: response.name,
            photoPath: response.avatar_url,
            score: (response.public_repos+response.followers)*12,
          };
          this.playerTwoFound = true;
          this._battleService.addPlayer(2, this.playerTwo)
          .then((response)=>{
            console.log('then');
            console.log('response');
          })
          .catch((error)=>{
            console.log('catch',error)
          });
          break;
      }
    })
    .catch((error)=>{
      console.log('catch');
      console.log(error);
    })
  }
  startBattle(){
    this._router.navigate(['/results']);
  }
}
