import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-ss',
  templateUrl: './c-ss.component.html',
  styleUrls: ['./c-ss.component.css']
})
export class CSSComponent implements OnInit {
  @Input() ssPower: Number;
  constructor() { }

  ngOnInit() {
  }

}
