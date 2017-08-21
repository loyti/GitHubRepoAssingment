import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from './../login/login.component';
import { PlayComponent } from './../play/play.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  newTq: object;

  constructor(private _doService: DoService, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  create(newTq){
    console.log(newTq);
    console.log("in triva question component create");
    this._doService.newTq(newTq)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
