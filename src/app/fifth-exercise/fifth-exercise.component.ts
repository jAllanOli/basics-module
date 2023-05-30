import { Component, DoCheck } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-fifth-exercise',
  templateUrl: './fifth-exercise.component.html',
  styleUrls: ['./fifth-exercise.component.css'],
})
export class FifthExerciseComponent implements DoCheck {
  counter!: number;

  constructor(private counterService: CounterService) {}

  ngDoCheck(): void {
    this.counter = this.counterService.counter;
  }
}
