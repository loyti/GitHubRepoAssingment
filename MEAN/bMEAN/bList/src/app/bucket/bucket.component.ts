import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  currentUser: object;
  bItems: object[];
  users: object[];
  subscription: Subscription;
  newBitem: object = {bTitle: '', bDescription: '', bOwner: '', bStatus: ''};
  userId: string;
  constructor(private _doService: DoService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.params);

    this.subscription = this._route.paramMap.switchMap((params)=>{
      return this._doService.allUser(params.get('users'))
    }).subscribe((users) => {this.users = users; this.userId = users._id;});

    this._doService.getCurrentUser()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.currentUser = response;
      this.allBitems();
    })
    .catch((error)=>{
      console.log('catch',error);
    })
  }
  create(bItem){
    console.log(bItem);
    console.log("in bucket item component create");
    this._doService.newBitem(bItem)
    .then((response)=>{
      console.log(response);
      this.allBitems();
      this.allUsers();
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  allBitems(){
    console.log('getting all bucket items');
    this._doService.allBucket()
    .then((response)=>{
      console.log(response);
      this.bItems = response;
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  allUsers(){
    console.log('getting all users');
    this._doService.allUser(this.users)
    .then((response)=>{
      console.log(response);
      this.users = response;
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
