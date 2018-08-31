import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { User } from '../shared/models/user.model';
import { UsersService } from './users.service';


import { Observable } from 'rxjs';



@Injectable()
export class UserListResolver implements Resolve<Observable<User[]>> {

  constructor( private usersService: UsersService ) { }

  resolve(): Observable<User[]> {

    console.log(this.usersService);
    
    return this.usersService.fetchUsers();
  
  }
  
}