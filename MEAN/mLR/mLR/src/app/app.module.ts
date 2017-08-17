import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { SuccessComponent } from './success/success.component';

import { LoginregService } from './loginreg.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
