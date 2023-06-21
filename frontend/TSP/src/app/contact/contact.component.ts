import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router,private service: ContactService ) {
  
  }
  form = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
    message: new FormControl('',[Validators.required]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.service.saveContact(this.data).subscribe((data: any) => {
      console.log(data);
    });

    this.router.navigate(['/PassengerProfile']);
  }
}
