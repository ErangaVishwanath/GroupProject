import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meet-taxi',
  templateUrl: './meet-taxi.component.html',
  styleUrls: ['./meet-taxi.component.css']
})
export class MeetTaxiComponent {
  TaxiDriverSrc:String = "assets/3 meet your taxi.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/method']);
    }, 10000); // 10000 milliseconds 
  }
}
