import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'


@Injectable()
export class BattleService {

  constructor(private _http:Http) { }

  getInfo(newPlayer){
    console.log("in service's function");
    return this._http.get('https://api.github.com/users/'+newPlayer.username).map(Response=>Response.json()).toPromise();
  }
  // battle(playerOne, playerTwo){
  //   console.log('in service battle function');
  //   return this._http.get('/api/currentPlayers').map(Response=>Response.json()).toPromise();
  // }
  addPlayer(num, player){
    console.log("in service's addPlayer function");
    return this._http.post('/api/players', {playerNum: num, player: player}).map(Response=>Response.json()).toPromise();
  }

  getCurrentPlayers(){
    console.log('getting current players');
    return this._http.get('/api/current_players').map(Response=>Response.json()).toPromise();
  }

  getPlayer(playerId){
    console.log("in service's get current players");
    return this._http.get('/api/current_players').
    map(Response=>Response.json()).toPromise();
  }

  show(player){
    return this._http.post('/api/show', {_id: player}).map(Response=>Response.json()).toPromise();
  }
}
