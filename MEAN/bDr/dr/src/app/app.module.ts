import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AptsComponent } from './apts/apts.component';

import { DoService } from './do.service';
import { AddaComponent } from './adda/adda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AptsComponent,
    AddaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
