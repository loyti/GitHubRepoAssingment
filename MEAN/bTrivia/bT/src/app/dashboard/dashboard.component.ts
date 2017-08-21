import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { PlayComponent } from './../play/play.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: object;
  currentUser: object;
  subscription: Subscription;
  userId: string;

  tq: object;
  tqs: object[];
  newTq: object;

  constructor(private _doService: DoService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._doService.getCurrentUser()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.currentUser = response;

    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }

  allTqs(){
    console.log('getting all trivia questions');
    this._doService.allTq()
    .then((response)=>{
      console.log(response);
      this.tqs = response;
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}
