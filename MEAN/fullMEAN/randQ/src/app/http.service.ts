import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  createQuote(quote){
    console.log("in HttpService's createQuote")
    return this._http.post('/api/quotes', quote).map(Response=>Response.json()).toPromise()
  }
  indexQuotes(){
    console.log("in the service's indexQuotes");
    return this._http.get('/api/quotes').map(Response=>Response.json()).toPromise()
  }
}
