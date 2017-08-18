import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { ShowComponent } from './../show/show.component';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  currentUser: object;
  newBitem: object = {bTitle: '', bDescription: '', bOwner: '', bStatus: ''};
  constructor(private _doService: DoService, private _router: Router) { }

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

}
