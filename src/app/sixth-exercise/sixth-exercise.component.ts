import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sixth-exercise',
  templateUrl: './sixth-exercise.component.html',
  styleUrls: ['./sixth-exercise.component.css'],
})
export class SixthExerciseComponent {
  @ViewChild('form') signForm!: NgForm;
  defaultSubscription = 'advanced';

  onSubmit() {
    console.log(this.signForm);
    this.signForm.reset();
  }
}
