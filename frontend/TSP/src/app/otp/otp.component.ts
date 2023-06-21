import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {
  reactiveForm!: FormGroup;
  submitted: boolean = false;
  
  data: any;
  // formData!: FormGroup;

  LoginForm = new FormGroup({
    mobctrl: new FormControl('', [Validators.required,this.phoneValidator])
  })
  getError(control: any): string {
    if (control.errors?.required && control.touched)
    return 'This Field is Required';
    else if(control.errors?.phoneError && control.touched)
    return 'Please enter valid Phone Number';
    else return '';
  }

  phoneValidator(control: AbstractControl) {
    const pattern = /[0-9]{10}z/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        phoneError: true
      }
    else return null;
  }



  num1=30;


  constructor() { }

  ngOnInit(): void {
    setInterval ( () => {
      if(this.num1<=0){
        clearInterval;
      }
      else{
        this.num1--;
      }
    },1000);
  }


  otpInputConfig : NgxOtpInputConfig = {
    otpLength : 4,
    autofocus : true,
    classList :{
      inputBox : 'my-super-box-class',
      input : 'my-super-class',
      inputFilled : 'my-super-filled-class',
      inputDisabled : 'my-super-disable-class',
      inputSuccess : 'my-super-success-class',
      inputError : 'my-super-error-class'
    }
  }

  handleotpChange(value:any) : void {
    console.log(value);
  }

  handleFillEvent(value:any) : void {
    console.log(value);
  }

}
function getFormattedTime() {
  throw new Error('Function not implemented.');
}

