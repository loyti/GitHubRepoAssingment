import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Switch Board';
  todayDate = new Date();
  todayTime = new Date();
  show: boolean = true;
}
