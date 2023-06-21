import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ServicesComponent } from './services/services.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule,
  ReactiveFormsModule,
  Validator,
  FormBuilder,
} from '@angular/forms';
import { OTPComponent } from './otp/otp.component';
import { SuccessfulComponent } from './successful/successful.component';
import { HttpClientModule} from '@angular/common/http';
import { SocialLoginModule,GoogleLoginProvider,SocialAuthServiceConfig} from '@abacritt/angularx-social-login';
import { TrasportMediaComponent } from './trasport-media/trasport-media.component';
import { MainComponent } from './main/main.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetotpComponent } from './getotp/getotp.component';
import { WeatherComponent } from './weather/weather.component';
import { MediaComponent } from './media/media.component';
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider
// } from '@abacritt/angularx-social-login';



// const config = new SocialAuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('Id'),
//   },
// ]);
// export function provideConfig(){
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ServicesComponent,
    VerifyEmailComponent,
    PrivacytermsComponent,
    OTPComponent,
    SuccessfulComponent,
    TrasportMediaComponent,
    MainComponent,
    VarifyEmailComponent,
    ForgotPasswordComponent,
    GetotpComponent,
    WeatherComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxOtpInputModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers:[
    { 
      
      provide:'SocialAuthServiceConfig',
      useValue: {
      autoLogin: false, providers: [
      {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider ('445031764899-e7qm1u86m08rpnad7mqvkejm2r2n5q11.apps.googleusercontent.com')
      }
      ] 
    } as SocialAuthServiceConfig,
  }
  ],
  // providers: [
  //   {
  //     provide: 'SocialAuthServiceConfig',
  //     useFactory:provideConfig,
  //     useValue: {
  //       autoLogin: true,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //             '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
  //           ),
  //         },
  //         {
  //           id: FacebookLoginProvider.PROVIDER_ID,
  //           provider: new FacebookLoginProvider('561602290896109'),
  //         },
  //       ],
  //       onError: (err) => {
  //         console.error(err);
  //       }
  //     } as SocialAuthServiceConfig,
  //   },
  // ],
  //providers:[ ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
