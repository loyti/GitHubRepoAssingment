import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-ss3',
  templateUrl: './c-ss3.component.html',
  styleUrls: ['./c-ss3.component.css']
})
export class CSS3Component implements OnInit {
  @Input() s3Power: Number;
  constructor() { }

  ngOnInit() {
  }

}
