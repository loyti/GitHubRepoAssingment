import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Cats';
  x: Number = 7;
  y: Number = 13;
  todayDate = new Date();
  todayTime = new Date();
  myBoolean: Boolean = true;
}
