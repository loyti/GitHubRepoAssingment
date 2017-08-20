import { Component, OnInit } from '@angular/core';
import { DoService } from './../do.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { BucketComponent } from './../bucket/bucket.component';

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

  userInfo(user){
    console.log('in userInfo')
    this._doService.userInfo(user)
    .then((response)=>{
      this.user = response;
  		// this.sortItems(this.user.items);
      this._router.navigate(['/users', user]);
    })
    .catch((error)=>{
      console.log('something went wrong', error)
    })
  }
}
