import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-r-quotes',
  templateUrl: './r-quotes.component.html',
  styleUrls: ['./r-quotes.component.css']
})
export class RQuotesComponent implements OnInit {
  newQuote: object = {qname: '', quote:''};
  quotes: object;
  errors: object[];
  constructor(private _httpService: HttpService) { }

  getAllQuotes(){
    this._httpService.indexQuotes()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.quotes = response;
    })
    .catch((error)=>{
      console.log('catch');
      console.log(error);
    })
  }
  ngOnInit() {
    this.getAllQuotes();
  }
  addQuote(quoteToAdd){
    console.log(quoteToAdd);
    console.log('addQuote in BTQComponent');
    this.errors = [];
    this._httpService.createQuote(quoteToAdd)
    .then((response)=>{
      console.log('then');
      console.log(response);
      if(response.errors){
  			console.log("got validation errors");
  			console.log(response.errors);
  			for(var key in response.errors){
  				this.errors.push(response.errors[key]);
  			}
  		}else{
	  		this.newQuote = {name: "", quote: ""};
	  		this.getAllQuotes();
  		}
    })
    .catch((error)=>{
      console.log('catch');
      console.log(error);
    })
  }
}
