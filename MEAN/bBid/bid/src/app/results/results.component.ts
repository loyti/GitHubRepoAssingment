import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './../login/login.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { BidsComponent } from './../bids/bids.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

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
