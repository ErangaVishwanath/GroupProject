import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css'],
})

export class CardPaymentComponent {

  // data: any;
  // constructor(private formBuilder: FormBuilder, private router: Router) {}

  // formpay = new FormGroup({
  //   cardnum: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[0-9]{16}$'),
  //   ]),
  //   cvn: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[0-9]{3}$'),
  //   ]),
  // });
  // submit() {
  //   this.data = this.formpay.value;
  //   console.log(this.data);
  //   this.router.navigate(['/cash']);
  // }

}
