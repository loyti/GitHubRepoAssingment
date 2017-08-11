import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { CSComponent } from './power/c-s/c-s.component';
import { CSSComponent } from './power/c-ss/c-ss.component';
import { CSS2Component } from './power/c-ss2/c-ss2.component';
import { CSS3Component } from './power/c-ss3/c-ss3.component';
import { CSS4Component } from './power/c-ss4/c-ss4.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    CSComponent,
    CSSComponent,
    CSS2Component,
    CSS3Component,
    CSS4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
