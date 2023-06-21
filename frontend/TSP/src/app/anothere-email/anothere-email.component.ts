import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anothere-email',
  templateUrl: './anothere-email.component.html',
  styleUrls: ['./anothere-email.component.css']
})
export class AnothereEmailComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
  }
  formg = new FormGroup({
    
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
  });

  submit() {
    this.data = this.formg.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
}
