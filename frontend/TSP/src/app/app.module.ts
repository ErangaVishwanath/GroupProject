import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule}from'@angular/forms';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PassengerProfileDefaultComponent } from './passenger-profile-default/passenger-profile-default.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { AnothereEmailComponent } from './anothere-email/anothere-email.component';
import { PasswordComponent } from './password/password.component';
import { HelpComponent } from './help/help.component';
import { HelpRidersComponent } from './help-riders/help-riders.component';
import { ContactComponent } from './contact/contact.component';
import { LostPropertyComponent } from './lost-property/lost-property.component';
import { QuestionsComponent } from './questions/questions.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PassengerProfileDefaultComponent,
    PassengerEditComponent,
    AnothereEmailComponent,
    PasswordComponent,
    HelpComponent,
    HelpRidersComponent,
    ContactComponent,
    LostPropertyComponent,
    QuestionsComponent,
    ComplaintComponent,
    ChatbotComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
 
  bootstrap: [AppComponent],
  
})
export class AppModule {}
