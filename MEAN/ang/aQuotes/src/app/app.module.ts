import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QlistComponent } from './quotes/qlist/qlist.component';
import { QnewComponent } from './quotes/qnew/qnew.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QlistComponent,
    QnewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
