import { Component, DoCheck } from '@angular/core';
import { User, UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements DoCheck {
  users!: User[];

  constructor(private userServices: UsersServiceService) {}

  ngDoCheck(): void {
    this.users = this.userServices.getUsersByStatus(true);
  }

  setToInactive(name: string) {
    this.userServices.setToInactive(name);
  }
}
