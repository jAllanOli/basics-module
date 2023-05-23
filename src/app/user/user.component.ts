import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userName!: string;
  serverStatus = 'offline';
  users = ['user1', 'user2'];

  constructor() {}

  ngOnInit() {}

  onClick() {
    //this.userName = '';
    this.serverStatus = 'online';
    this.users.push(this.userName);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
