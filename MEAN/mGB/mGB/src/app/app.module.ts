import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';

import { BattleService } from './battle.service';
import { ShowPlayerComponent } from './show-player/show-player.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingsComponent,
    ResultsComponent,
    ShowPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
