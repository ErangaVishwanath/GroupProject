import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wait-till-pickup',
  templateUrl: './wait-till-pickup.component.html',
  styleUrls: ['./wait-till-pickup.component.css']
})
export class WaitTillPickupComponent {
  ImageSource:String="/assets/waiting for taxi.jpg";

  //  routing
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/meet']);
    }, 7000); // 7000 milliseconds 
}
}
