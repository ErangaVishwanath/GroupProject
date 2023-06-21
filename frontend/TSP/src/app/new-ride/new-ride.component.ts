import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent {
  activeButton = 2;
  selectRide =0;

  toggleActive(buttonNumber: number): void {
    this.activeButton = buttonNumber;

    // toggleSelect(): void {
    // this.selectRide++
    // }

    // showCard :true;
    // NewRideComponent.constructor(Router); { }

    // hideCard(): void{
    //   this.showCard =false,
    //   this:Router.navigate(['/confirm']);
    }
}

