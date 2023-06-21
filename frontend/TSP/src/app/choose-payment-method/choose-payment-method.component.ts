import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choose-payment-method',
  templateUrl: './choose-payment-method.component.html',
  styleUrls: ['./choose-payment-method.component.css']
})
export class ChoosePaymentMethodComponent {
  paymentImageSource:String="assets/payment.jpg";
window: any;

  constructor(private router: Router) {}

  redirectToLink() {
    const redirectUrl = 'https://buy.stripe.com/test_00g6rsbcdbDM3ZuaEE';
    this.router.navigate([redirectUrl]);
  }
  
}
