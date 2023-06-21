import { Component, OnInit } from '@angular/core';
import Cotter from 'cotter';

@Component({
  selector: 'app-getotp',
  templateUrl: './getotp.component.html',
  styleUrls: ['./getotp.component.css'],
})
export class GetotpComponent implements OnInit {
  title = 'My Cotter App';

  // 2️⃣ Initialize and show the form on init
  success = false;
  payload = {};
  payloadString = '';
  ngOnInit(): void {
    var cotter = new Cotter('47775a9e-f599-4999-b6ea-f901315ad31b'); // 👈 Specify your API KEY ID here
    cotter
      .withFormID('LoginForm')
      .signInWithOTP()
      .showEmailForm()
      .then((payload: object) => {
        this.success = true;
        this.payload = payload;
        this.payloadString = JSON.stringify(payload, null, 4);
      })
      .catch((err: any) => console.log(err));
  }
}
