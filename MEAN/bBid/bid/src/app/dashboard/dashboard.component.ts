import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './../login/login.component';
import { BidsComponent } from './../bids/bids.component';
import { ResultsComponent } from './../results/results.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: object;

  constructor(private _doService: DoService, private _route: ActivatedRoute, private _router: Router) { }

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
