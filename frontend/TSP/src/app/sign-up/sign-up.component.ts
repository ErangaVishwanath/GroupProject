import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import User from 'cotter/lib/models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  [x: string]: any;
  reactiveForm: FormGroup;
  submitted: boolean = false;

  data: any;

  LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      this.customEmailValidator,
    ]),
    password: new FormControl('', [
      Validators.required,
      this.PasswordValidator,
    ]),
    reenterpassword: new FormControl('', [
      Validators.required,
      this.PasswordValidator,
    ]),
  });

  getError(control: any): string {
    if (control.errors?.required && control.touched)
      return 'This Field is Required';
    else if (control.errors?.emailError && control.touched)
      return 'Please enter valid email';
    else return '';
  }

  customEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true,
      };
    else return null;
  }

  getpasswordError(control: any): string {
    if (control.errors?.required && control.touched)
      return 'This Field is Required';
    else if (control.errors?.passwordError && control.touched)
      return 'Please enter valid Password';
    else return '';
  }
  PasswordValidator(control: AbstractControl) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        passwordError: true,
      };
    else return null;
  }

  getrepasswordError(control: any): string {
    if (control.errors?.required && control.touched)
      return 'This Field is Required';
    else if (control.errors?.repasswordError && control.touched)
      return 'Please enter valid Password';
    else return '';
  }
  rePasswordValidator(control: AbstractControl) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        repasswordError: true,
      };
    else return null;
  }

  onSubmit(): void {
    if (this.LoginForm.valid) {
      console.log('Passwords match!');
      console.log('successful');
      // Perform further actions here
    } else {
      console.log('Passwords do not match.');
      // Handle error case
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const reenterpassword = formGroup.get('reenterpassword')?.value;

    if (password !== reenterpassword) {
      return { passwordMismatch: true };
    } else {
      return console.log('error');
    }
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.reactiveForm = this.formBuilder.group({
      username: new FormControl(),
    });
  }
  ngOnInit(): void {}

  signUp() {
    if (this.LoginForm.invalid) {
      return;
    }

    const signUpRequest = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,
      reenterpassword: this.LoginForm.value.reenterpassword,
    };

    this.http.post('/signup', signUpRequest).subscribe(
      (response) => {
        // Handle the successful sign-up response
        console.log(response);
      },
      (error) => {
        // Handle the error response
        console.error(error);
      }
    );
  }
}
