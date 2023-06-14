import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SeventhExerciseComponent } from './seventh-exercise.component';

@NgModule({
  declarations: [SeventhExerciseComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SeventhExerciseComponent],
})
export class SeventhExerciseModule {}
