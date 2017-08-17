import { Component, OnInit } from '@angular/core';
import { BattleService } from './../battle.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {
  userId: string;
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _battleService: BattleService) { }

  ngOnInit() {
    console.log(this._route.params);
    this.subscription = this._route.paramMap.switchMap((params)=>{
      return this._battleService.getPlayer(params.get('id'))
    }).subscribe(player=>
        this.userId = player._id,
        // this.player = player,
    )
  }

}
