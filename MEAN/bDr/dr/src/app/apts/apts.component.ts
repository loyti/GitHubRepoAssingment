import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-apts',
  templateUrl: './apts.component.html',
  styleUrls: ['./apts.component.css']
})
export class AptsComponent implements OnInit {

  currentUser: object;
  apts: object[];
  users: object[];
  newApt: object = {aDate: '', aTime: '', aName: '', aReason: ''};
  userId: string;
  constructor(private _doService: DoService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.params);

    this._doService.getCurrentUser()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.currentUser = response;
      this.allApts();
    })
    .catch((error)=>{
      console.log('catch',error);
    })
    this.allApts();
  }
  create(apt){
    console.log(apt);
    console.log("in apts component create");
    this._doService.newApt(apt)
    .then((response)=>{
      console.log(response);
      this.allApts();
      this.allUsers();
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  allApts(){
    console.log('getting all apts items');
    this._doService.allApts()
    .then((response)=>{
      console.log(response);
      this.apts = response;
    })
    .catch((error)=>{
      console.log('in the component error')
      console.log(error)
      console.log('finished with error log')
    })
  }
  allUsers(){
    console.log('getting all users');
    this._doService.getUser(this.users)
    .then((response)=>{
      console.log(response);
      this.users = response;
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
