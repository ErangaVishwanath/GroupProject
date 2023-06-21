import { Component} from '@angular/core';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../passenger.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css'],
})
export class PassengerEditComponent{
  
  data: any;
  passenger?: any;
  firstname: string = "";
  lastname: string = "";
  mobileno: number = 0;
  email: string = "";
  location: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private PassengerService: PassengerService
  ) {}


  ngOnInit():void{
    let id = 1;
    this.PassengerService.getPassenger(id).subscribe(data => {
      this.passenger = data
      console.log(this.passenger)
    })
  }

  getPassenger(){
    this.http.get("http://localhost:8083/passenger/get/1")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.passenger = resultData;
    });
  }

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    mobileno: new FormControl('', [
      Validators.required,
      Validators.pattern('[0][7][784651][0-9]{7}'),
    ]),
    location: new FormControl('', [Validators.required]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);

    /* this.service.savePassenger(this.data).subscribe((data: any) => {
      console.log(data);
    }); */
    this.router.navigate(['/PassengerProfile']);
  }
}
function subscribe(arg0: (resultData: any) => void) {
  throw new Error('Function not implemented.');
}

