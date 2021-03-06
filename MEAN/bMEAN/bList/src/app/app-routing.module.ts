import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BucketComponent } from './bucket/bucket.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'dashboard',
    component: BucketComponent
  },
  {
    path: 'user/:id',
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
