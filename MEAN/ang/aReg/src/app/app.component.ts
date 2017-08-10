import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Registration';
  todayDate = new Date();
  todayTime = new Date();
  users = [];
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passConf: '',
    adStreet: '',
    unitApt: '',
    adCity: '',
    adState: '',
    lucky: false,
  };
  onSubmit(){
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passConf: '',
      adStreet: '',
      unitApt: '',
      adCity: '',
      adState: '',
      lucky: false,
    }
  }
}
