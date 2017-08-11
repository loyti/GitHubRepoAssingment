import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-s',
  templateUrl: './c-s.component.html',
  styleUrls: ['./c-s.component.css']
})
export class CSComponent implements OnInit {
  @Input() sPower: Number;
  constructor() { }

  ngOnInit() {
  }

}
