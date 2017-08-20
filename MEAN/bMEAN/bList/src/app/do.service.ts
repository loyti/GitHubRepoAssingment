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
  newBitem(bItem){
    console.log('in service new bucket item');
    return this._http.post('/api/bucketItems', bItem)
    .map(Response=>Response.json()).toPromise();
  }
  allBucket(){
    console.log('in service all bucket items');
    return this._http.get('/api/bucketItems')
    .map(Response=>Response.json()).toPromise();
  }
  allUser(users){
    console.log('in service all users');
    return this._http.get('/api/allUsers')
    .map(Response=>Response.json()).toPromise();
  }
  logout(){
  	return this._http.get('/api/users/logout')
  	.map(res=>res.json()).toPromise();
  }
  userInfo(user){
  	return this._http.get('/api/users/' + user)
  	.map(res=>res.json()).toPromise();
  }
}
