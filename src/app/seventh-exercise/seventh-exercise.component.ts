import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seventh-exercise',
  templateUrl: './seventh-exercise.component.html',
  styleUrls: ['./seventh-exercise.component.css'],
})
export class SeventhExerciseComponent implements OnInit {
  projectForm!: FormGroup;
  errorMessages = {
    email: 'Please enter a valid email',
    nameInvalid: 'Please enter a valid name',
    required: 'This field is required',
  };

  geterrorMessage(controlName: string): string {
    const error = Object.keys(this.projectForm.get(controlName)!.errors!)[0];

    return this.errorMessages[error as keyof typeof this.errorMessages];
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.nameIsForbidden.bind(this),
      ]),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null),
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log(this.projectForm);
    }
  }

  nameIsForbidden(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Test') {
      return { nameInvalid: true };
    } else return null;
  }
  // nameIsForbidden(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({ isForbidden: true });
  //       } else resolve(null);
  //     }, 1500);
  //   });

  //   return promise;
  // }
}
