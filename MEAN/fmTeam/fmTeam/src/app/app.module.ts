// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// services
import { AddUsersService } from './add-users.service';

// routing modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
    UserInfoComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AddUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
