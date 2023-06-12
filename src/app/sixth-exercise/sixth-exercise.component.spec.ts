import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthExerciseComponent } from './sixth-exercise.component';

describe('SixthExerciseComponent', () => {
  let component: SixthExerciseComponent;
  let fixture: ComponentFixture<SixthExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthExerciseComponent]
    });
    fixture = TestBed.createComponent(SixthExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
