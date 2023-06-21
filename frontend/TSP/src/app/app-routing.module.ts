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
import { PassengerProfileDefaultComponent } from './passenger-profile-default/passenger-profile-default.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { AnothereEmailComponent } from './anothere-email/anothere-email.component';
import { PasswordComponent } from './password/password.component';
import { HelpComponent } from './help/help.component';
import { HelpRidersComponent } from './help-riders/help-riders.component';
import { ContactComponent } from './contact/contact.component';
import { LostPropertyComponent } from './lost-property/lost-property.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  {path:"",redirectTo:"PassengerProfile",pathMatch:"full"},
  {path:'PassengerProfile',component: PassengerProfileDefaultComponent},
  {path: 'PassengerEdit', component: PassengerEditComponent},
  {path: 'AnotherEmail', component: AnothereEmailComponent},
  {path: 'ChangePassword', component: PasswordComponent},
  {path: 'Help',component: HelpComponent},
  {path: 'HelpRiders', component: HelpRidersComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'LostProperty',component: LostPropertyComponent},
  {path: 'Complaint', component: ComplaintComponent},
  {path: 'ChatMaster', component: ChatbotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
