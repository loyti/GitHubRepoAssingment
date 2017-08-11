import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-ss4',
  templateUrl: './c-ss4.component.html',
  styleUrls: ['./c-ss4.component.css']
})
export class CSS4Component implements OnInit {
  @Input() s4Power: Number;
  constructor() { }

  ngOnInit() {
  }

}
