import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';
import { ShowPlayerComponent } from './show-player/show-player.component';

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  },
  {
    path: 'rankings',
    component: RankingsComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'players/:id',
    component: ShowPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
