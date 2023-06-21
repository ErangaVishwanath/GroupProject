import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LostService } from './lost.service';
@Component({
  selector: 'app-lost-property',
  templateUrl: './lost-property.component.html',
  styleUrls: ['./lost-property.component.css']
})
export class LostPropertyComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router , private service: LostService) {
  }
  
  formt = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    /* date: new FormControl('',[Validators.required]), */
    date: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
  });

  submit() {
    this.data = this.formt.value;
    console.log(this.data);

    this.service.saveLost(this.data).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/PassengerProfile']);
  }
}
