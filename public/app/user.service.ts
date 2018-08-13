import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersApiUrl = '/api/users';
  
  constructor(private http: Http) { }
    
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersApiUrl)
               .toPromise()
               .then(response => response.json() as User[])
  }
}