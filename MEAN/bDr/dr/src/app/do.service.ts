import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'


@Injectable()
export class DoService {

  constructor(private _http: Http) { }
  newUser(user){
    console.log("in service's newUser method");
    return this._http.post('/api/users', user)
    .map(Response=>Response.json()).toPromise();
  }
  getCurrentUser(){
    return this._http.get('/api/current_user')
    .map(Response=>Response.json()).toPromise();
  }
  getUser(userId){
    console.log("in service's get users");
    return this._http.get('/api/users/'+userId)
    .map(Response=>Response.json()).toPromise();
  }
  newApt(apt){
    console.log('in service new apts');
    return this._http.post('/api/apts', apt)
    .map(Response=>Response.json()).toPromise();
  }
  allApts(){
    console.log('in service all apts');
    return this._http.get('/api/allApts')
    .map(Response=>Response.json()).toPromise();
  }
  logout(){
  	return this._http.get('/api/users/logout')
  	.map(res=>res.json()).toPromise();
  }
}
