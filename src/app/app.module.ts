import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ThirdExerciseComponent } from './third-exercise/third-exercise.component';
import { ForthExerciseComponent } from './forth-exercise/forth-exercise.component';
import { GameControlComponent } from './forth-exercise/game-control/game-control.component';
import { OddComponent } from './forth-exercise/odd/odd.component';
import { EvenComponent } from './forth-exercise/even/even.component';

@NgModule({
  declarations: [AppComponent, UserComponent, ThirdExerciseComponent, ForthExerciseComponent, GameControlComponent, OddComponent, EvenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
