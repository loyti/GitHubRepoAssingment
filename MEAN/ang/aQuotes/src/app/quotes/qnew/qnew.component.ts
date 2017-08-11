import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quotes';
@Component({
  selector: 'app-qnew',
  templateUrl: './qnew.component.html',
  styleUrls: ['./qnew.component.css']
})
export class QnewComponent implements OnInit {
  newQuote = new Quote("","");
  @Output() addQuoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addQuote(aQuote){
  	console.log("addQuote");
  	console.log(aQuote);
  	this.newQuote = new Quote("", "");
  	this.addQuoteEvent.emit(aQuote);
  }
}
