import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

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
  arrBoard = [true, false, true];
  color = ['green','red'];
  myColor(indexOfarrBoard){
    if (this.arrBoard[indexOfarrBoard] == true){
      this.color[0] = 'green';
      this.arrBoard[indexOfarrBoard] = false;
    } else if (this.arrBoard[indexOfarrBoard] == false){
      this.color[1] = 'red';
      this.arrBoard[indexOfarrBoard] = true;
    };

  };
}
