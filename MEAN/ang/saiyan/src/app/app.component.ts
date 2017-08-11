import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Saiyan Calculator';
  todayDate = new Date();
  todayTime = new Date();
  myPower: Number;
  levels: Number[] =[1,10,90,150,250,500]
  constructor(){
    this.myPower = 1;
  }
  submit(){
    console.log(this.myPower);
  }

}
