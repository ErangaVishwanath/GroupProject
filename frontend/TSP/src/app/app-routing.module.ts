import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitTillPickupComponent } from './wait-till-pickup/wait-till-pickup.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { MeetTaxiComponent } from './meet-taxi/meet-taxi.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { NewRideComponent } from './new-ride/new-ride.component';
import { DropPassengerComponent } from './drop-passenger/drop-passenger.component';

const routes: Routes = [
  {path: "", redirectTo:"origin",pathMatch:"full"},
  {path:'wait',component: WaitTillPickupComponent},
  {path:'confirm',component:ConfirmBookingComponent},
  {path:'method',component:ChoosePaymentMethodComponent}, 
  {path:'card',component: CardPaymentComponent},
  {path:'meet',component: MeetTaxiComponent},
  {path:'cash',component:PaymentDoneComponent},
  {path:'ride',component:NewRideComponent},
  {path:'drop',component:DropPassengerComponent},
  {path:'pickup',component: PassengerDetailsComponent}];
  // {path:'noti',component: NotificatioPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
