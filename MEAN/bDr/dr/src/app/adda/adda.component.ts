import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { AptsComponent } from './../apts/apts.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adda',
  templateUrl: './adda.component.html',
  styleUrls: ['./adda.component.css']
})
export class AddaComponent implements OnInit {

  currentUser: object;
  apts: object[];
  users: object[];
  subscription: Subscription;
  newApt: object = {aDate: '', aTime: '', aName: '', aReason: ''};
  userId: string;
  constructor(private _doService: DoService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.params);

    this.subscription = this._route.paramMap.switchMap((params)=>{
      return this._doService.getUser(params.get('userId'))
    }).subscribe((users) => {this.users = users; this.userId = users._id;});

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
  create(apt){
    console.log(apt);
    console.log("in apts component create");
    this._doService.newApt(apt)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
