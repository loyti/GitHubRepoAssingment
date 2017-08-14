import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WDetailsComponent } from './w-details/w-details.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';

import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    WDetailsComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    SanJoseComponent,
    SeattleComponent,
    WashingtondcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
