import { Component } from '@angular/core';

@Component({
  selector: 'app-third-exercise',
  templateUrl: './third-exercise.component.html',
  styleUrls: ['./third-exercise.component.css'],
})
export class ThirdExerciseComponent {
  detailVisibility = false;
  changeLogs: number[] = [];
  logCounter = 0;

  toggleVisibility() {
    this.detailVisibility = !this.detailVisibility;
    this.logCounter++;
    this.changeLogs.push(this.logCounter);
  }
}
