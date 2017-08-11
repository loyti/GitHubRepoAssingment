import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-ss2',
  templateUrl: './c-ss2.component.html',
  styleUrls: ['./c-ss2.component.css']
})
export class CSS2Component implements OnInit {
  @Input() s2Power: Number;
  constructor() { }

  ngOnInit() {
  }

}
