import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AddUsersService {

  constructor(private _http: Http) { }

  createUser(user) {
    console.log('in AddUsersService createUser')
    return this._http.post('/api/users', user).map(Response=>Response.json()).toPromise()
  }
}
