import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Layout';
  todayDate = new Date();
  todayTime = new Date();

  constructor() { }

  ngOnInit() {
  }
}
