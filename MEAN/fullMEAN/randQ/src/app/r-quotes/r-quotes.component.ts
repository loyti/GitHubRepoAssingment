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
  constructor(private _httpService: HttpService) { }

  getAllQuotes(){
    this._httpService.indexQuotes()
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.quotes = response;
      this.newQuote = {qname: '', quote:''};
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
    this._httpService.createQuote(quoteToAdd)
    .then((response)=>{
      console.log('then');
      console.log(response);
      this.newQuote = {qname: '', quote:''};
      this.getAllQuotes();
    })
    .catch((error)=>{
      console.log('catch');
      console.log(error);
    })
  }
}
