import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users = this.userServices.activeUsers;

  constructor(private userServices: UsersServiceService) {}

  setToInactive(id: number) {
    this.userServices.setToInactive(id);
  }
}
