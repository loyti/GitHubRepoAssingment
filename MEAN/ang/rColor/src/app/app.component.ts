import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  todayDate = new Date();
  todayTime = new Date();
  colors = ["#000","#111","#222","#333","#444","#555","#666","#777","#888","#999"];
  myColors = [];
  randNum;
  constructor(){
    // var myColor = this.colors[this.colors.length-1];
    for(let i = 0; i < this.colors.length; i++){
      this.randNum = Math.floor(Math.random()*10);
      this.myColors.push(this.colors[this.randNum]);
    }
  }
};

// colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// rC = Math.floor(Math.random()* 256);
// gC = Math.floor(Math.random()* 256);
// bC = Math.floor(Math.random()* 256);
// aC = Math.floor(Math.random()*10)/10;
// rgbaColor = {};
// rgbaString = "";
// constructor(){
//   //this.rgbaString = "rbga(" + this.rC + "," + this.gC + "," + this.bC + "," + this.aC + ")"
//   console.log(this.rgbaString);
//   this.rgbaColor = {
//     //'background.rgba': this.rgbaString,
//     margin: "20px",
//     padding: "20px"
//   };
//
// }
