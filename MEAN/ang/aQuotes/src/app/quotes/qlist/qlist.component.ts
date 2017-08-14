import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../quotes';

@Component({
  selector: 'app-qlist',
  templateUrl: './qlist.component.html',
  styleUrls: ['./qlist.component.css']
})
export class QlistComponent implements OnInit {
  @Input() myQuotes: Quote[];
  constructor() { }

  ngOnInit() {
  }
  voteUp(quote) {
    quote.rating++;
  }

  voteDown(quote) {
    quote.rating--;
  }

  deleteQuote(quote) {
    quote.emit(quote);
  }

}
