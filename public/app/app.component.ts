import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  template: `
  <tr>
    <th style="width: 100px">Full name</th>
    <th style="width: 100px">Country</th>
    <th style="width: 100px">Position</th>
  </tr>
  <tr *ngFor="let user of users">  
    <td style="width: 100px">{{user.FirstName}} &nbsp; {{user.LastName}}</td>
    <td style="width: 100px">{{user.Country }}</td>
    <td style="width: 100px">{{user.Position }}</td>
 </tr>`,
  providers: [ UserService ]
})
export class AppComponent  { 
  users: User[];
  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService.getUsers().then(_users => this.users = _users);
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
