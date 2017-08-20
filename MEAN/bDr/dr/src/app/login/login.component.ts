import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { AptsComponent } from './../apts/apts.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: object = {username: ''}
  user: object[];
  constructor(private _doService: DoService, private _router: Router) { }

  ngOnInit() {
  }
  register(aUser){
    console.log(aUser);
    console.log("in component's register");
    this._doService.newUser(aUser)
    .then((response)=>{
      console.log(response);
      this._router.navigate(['/dashboard'])
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  logout(){
    console.log('loggin out');
    this._doService.logout()
    .then((response)=>{
      console.log(response);
      this._router.navigate(['/'])
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
