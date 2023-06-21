import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';
import { OTPComponent } from './otp/otp.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SuccessfulComponent } from './successful/successful.component';
import { TrasportMediaComponent } from './trasport-media/trasport-media.component';
import { MainComponent } from './main/main.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { GetotpComponent } from './getotp/getotp.component';

const routes: Routes = [
  {path:'',redirectTo:'sign-in',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'privacy-terms', component:PrivacytermsComponent},
  {path:'OTP',component:OTPComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'verifyEmail',component:VerifyEmailComponent},
  {path:'success',component:SuccessfulComponent},
  {path:'transportmedia', component: TrasportMediaComponent},
  {path:'main',component:MainComponent},
  {path:'verifyemail', component: VerifyEmailComponent},
  {path:'varifyemail', component: VarifyEmailComponent},
  {path:'getotp',component:GetotpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
