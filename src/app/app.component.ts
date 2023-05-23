import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName!: string;
  serverStatus = 'offline';

  onClick() {
    this.userName = '';
    this.serverStatus = 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
