import { Component } from '@angular/core';

@Component({
  selector: 'app-forth-exercise',
  templateUrl: './forth-exercise.component.html',
  styleUrls: ['./forth-exercise.component.css'],
})
export class ForthExerciseComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  handleNumber(receivedValue: number) {
    if (!(receivedValue % 2)) {
      this.evenNumbers.push(receivedValue);
    } else {
      this.oddNumbers.push(receivedValue);
    }
  }
}
