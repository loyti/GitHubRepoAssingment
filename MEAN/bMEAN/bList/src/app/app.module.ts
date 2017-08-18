import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketComponent } from './bucket/bucket.component';
import { LoginComponent } from './login/login.component';
import { DoService } from './do.service';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketComponent,
    LoginComponent,
    ShowComponent
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
