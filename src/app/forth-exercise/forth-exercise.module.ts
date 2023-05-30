import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForthExerciseComponent } from './forth-exercise.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [
    ForthExerciseComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [CommonModule],
  exports: [ForthExerciseComponent],
})
export class ForthExerciseModule {}
