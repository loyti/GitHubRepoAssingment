import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'United States Time Zones';
  todayDate = new Date();
  todayTime = new Date();
  today;
  pacTime = this.todayTime;
  pac = false;
  mountTime = this.pacTime ;//+ 3600000;
  mount = false;
  centTime = this.mountTime ;//+ 3600000;
  cent = false;
  eastTime = this.centTime ;//+ 3600000;
  east = false;
  whatPac(){
    !this.pac;
    if( this.pac == true){
      this.today = this.pacTime;
    };
    console.log(this.pac,this.today);
  };
  whatMount(){
    !this.mount;
    if(this.mount == true){
      this.today = this.mountTime;
    };
    console.log(this.mount,this.today);
  };
  whatCent(){
    !this.cent;
    if(this.cent == true){
      this.today = this.centTime;
    };
    console.log(this.cent,this.today);
  };
  whatEast(){
    !this.east;
    if(this.east == true){
      this.today = this.eastTime;
    };
    console.log(this.east,this.today);
  };
}
