import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  userId: string;
  subscription: Subscription;
  user: object;

  constructor(private _doService: DoService, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.params);
    this.subscription = this._route.paramMap.switchMap((params)=>{
      return this._doService.getUser(params.get('id'))
    }).subscribe((user) => {this.userId = user._id; this.user = user;});
  }

}
