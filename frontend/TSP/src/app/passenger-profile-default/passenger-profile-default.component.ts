import { Passenger } from './../passenger';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-passenger-profile-default',
  templateUrl: './passenger-profile-default.component.html',
  styleUrls: ['./passenger-profile-default.component.css'],
})
export class PassengerProfileDefaultComponent {
  data: any;
  passenger?: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private PassengerService: PassengerService
  ) {}

  ngOnInit():void{
    let id = 1;
    this.PassengerService.getPassenger(id).subscribe(data => {
      this.passenger = data
      console.log(this.passenger)
    })
  }

  form = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    mobileno: new FormControl('', [
      Validators.required,
      Validators.pattern('[0][7][784651][0-9]{7}'),
    ]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);
    this.PassengerService.getPassenger(this.passenger)
    this.router.navigate(['/Profile']);
  }
}
