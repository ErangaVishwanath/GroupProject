import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { WaitTillPickupComponent } from './wait-till-pickup/wait-till-pickup.component';
import { MeetTaxiComponent } from './meet-taxi/meet-taxi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRideComponent } from './new-ride/new-ride.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { NotificationDriverComponent } from './notification-driver/notification-driver.component';
import { NotificationPassengerComponent } from './notification-passenger/notification-passenger.component';
import { NotificationAdminComponent } from './notification-admin/notification-admin.component';
import { DropPassengerComponent } from './drop-passenger/drop-passenger.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ConfirmBookingComponent,
    PaymentDoneComponent,
    ChoosePaymentMethodComponent,
    CardPaymentComponent,
    WaitTillPickupComponent,
    MeetTaxiComponent,
    NewRideComponent,
    PassengerDetailsComponent,
    NotificationDriverComponent,
    NotificationPassengerComponent,
    NotificationAdminComponent,
    DropPassengerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
