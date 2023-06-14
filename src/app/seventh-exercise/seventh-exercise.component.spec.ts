import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhExerciseComponent } from './seventh-exercise.component';

describe('SeventhExerciseComponent', () => {
  let component: SeventhExerciseComponent;
  let fixture: ComponentFixture<SeventhExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeventhExerciseComponent]
    });
    fixture = TestBed.createComponent(SeventhExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
