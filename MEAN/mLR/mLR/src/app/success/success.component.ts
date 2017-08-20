import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../loginreg.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  currentUser: object = {name:''};
  userId: string;
  subscription: Subscription;
  constructor(private _loginRegService: LoginregService, private _route: ActivatedRoute) { };

  ngOnInit() {
    console.log(this._route.params);
    this.subscription = this._route.paramMap.switchMap((params)=>{
      return this._loginRegService.getCurrentUser(params.get('id'))
    }).subscribe((currentUser) => {this.userId = currentUser._id; this.currentUser = currentUser;});

    this._loginRegService.getCurrentUser()
    .then((response)=>{
      console.log(response);
      this.currentUser = response;
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
