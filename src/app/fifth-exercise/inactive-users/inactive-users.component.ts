import { Component, DoCheck } from '@angular/core';
import { User, UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements DoCheck {
  users!: User[];

  constructor(private userServices: UsersServiceService) {}

  ngDoCheck(): void {
    this.users = this.userServices.getUsersByStatus(false);
  }

  setToActive(name: string) {
    this.userServices.toggleStatus(name);
  }
}
