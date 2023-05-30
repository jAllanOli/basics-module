import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users = this.userServices.inactiveUsers;

  constructor(private userServices: UsersServiceService) {}

  setToActive(i: number) {
    this.userServices.setToActive(i);
  }
}
