import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [ new Quote("Quote1", "Description 1"), new Quote("Quote2", "Description 2")];
  constructor() { }

  ngOnInit() {
  }
  dataFromChild(eventData){
  	console.log("dataFromChild");
  	console.log(eventData);
  	this.quotes.push(eventData);
  }
  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
