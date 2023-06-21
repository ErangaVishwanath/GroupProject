import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  enteredLongitude!: number;
  enteredLatitude!: number;
  vehicleId!: number;
  noMatchFound: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef, private http: HttpClient ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  scrollDown() {
    const element = this.el.nativeElement;
    this.renderer.setProperty(element.ownerDocument.documentElement, 'scrollTop', 1000);
  }
  
  searchVehicles() {
    const url = 'http://localhost:8081/media'; // Replace with your backend API endpoint
    const params = {
      longitude: this.enteredLongitude.toString(),
      latitude: this.enteredLatitude.toString()
    };

    this.http.get<any>(url, { params }).subscribe(
      data => {
        if (data && data.vehicleId) {
          this.vehicleId = data.vehicleId;
          this.noMatchFound = false;
        } else {
          this.noMatchFound = true;
        }
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }

}
