import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
