import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AddUsersService } from './../add-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUser: object;
  user: object;
  constructor(private _addUsersService: AddUsersService) { }

  ngOnInit() {
  }
  addUser(userToAdd){
    console.log(userToAdd);
    console.log('add user in btqcomponent')
    this._addUsersService.createUser(userToAdd)
    .then((response)=>{

    })
    .catch((error)=>{

    })
  }
}
