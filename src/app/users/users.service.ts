import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "../shared/models/user.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endpointUrl: string = 'api/users';


  constructor(private http: HttpClient) { }


  fetchUsers(): Observable<User[]> {

    let req = this.http.get<User[]>(`${this.endpointUrl}/`)
 
    return req

  }

}
