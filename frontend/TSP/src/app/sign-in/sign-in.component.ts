import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialUser, GoogleLoginProvider , SocialAuthService} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  [x: string]: any;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  data: any;


  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, this.customEmailValidator]),
    password: new FormControl('', [Validators.required,this.PasswordValidator])
  })

  getError(control: any): string {
    if (control.errors?.required && control.touched)
    return 'This Field is Required';
    else if(control.errors?.emailError && control.touched)
    return 'Please enter valid email';
    else return '';
  }

  customEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true
      }
    else return null;
  }

  getpasswordError(control: any): string {
    if (control.errors?.required && control.touched)
    return 'This Field is Required';
    else if(control.errors?.passwordError && control.touched)
    return 'Please enter valid Password';
    else return '';
  }
  PasswordValidator(control: AbstractControl) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        passwordError: true
      }
    else return null;
  }

  constructor(private socialAuthService:SocialAuthService,private http: HttpClient) { 
  }
  signIn() {
    const signInRequest = {
      email: this['email'],
      password: this['password']
    };

    this.http.post('/signin', signInRequest).subscribe(
      (response) => {
        // Handle the successful sign-in response
        console.log(response);
      },
      (error) => {
        // Handle the error response
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  GoogleSiginIn() : void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  submit() {
    this.data = this.LoginForm.value;
    console.log(this.data);
  }

}
