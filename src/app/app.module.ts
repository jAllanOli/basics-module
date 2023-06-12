import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ThirdExerciseComponent } from './third-exercise/third-exercise.component';
import { ForthExerciseModule } from './forth-exercise/forth-exercise.module';
import { FifthExerciseModule } from './fifth-exercise/fifth-exercise.module';
import { SixthExerciseModule } from './sixth-exercise/sixth-exercise.module';

@NgModule({
  declarations: [AppComponent, UserComponent, ThirdExerciseComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ForthExerciseModule,
    FifthExerciseModule,
    SixthExerciseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
