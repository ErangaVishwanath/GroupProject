import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router , private service : ComplaintService) {
    
  }
  formt = new FormGroup({
    description: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
  });

  submit() {
    this.data = this.formt.value;
    console.log(this.data);

    this.service.saveComplaint(this.data).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/PassengerProfile']);
  }
}
