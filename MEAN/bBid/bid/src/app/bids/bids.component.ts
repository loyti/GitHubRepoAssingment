import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './../login/login.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ResultsComponent } from './../results/results.component';



@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  currentUser: object;

  bids: object[];
  newBid: object = {bid: ''};

  constructor(private _doService: DoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    this._doService.getCurrentUser()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.currentUser = response;
      this.bids = response;

    })
    .catch((error)=>{
      console.log('catch',error);
    })

  }
  addBid(newBid){
    console.log(newBid);
    this._doService.createBid(newBid)
    .then((response)=>{

    })
    .catch((error)=>{

    })

  }

}
