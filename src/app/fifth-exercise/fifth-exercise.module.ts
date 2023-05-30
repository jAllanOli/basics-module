import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifthExerciseComponent } from './fifth-exercise.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersServiceService } from './users-service.service';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    FifthExerciseComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  providers: [UsersServiceService, CounterService],
  imports: [CommonModule],
  exports: [FifthExerciseComponent],
})
export class FifthExerciseModule {}
