import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationDriverService  {

  private url ="http://localhost:8080/driver";

  constructor(private http:HttpClient) { }
  
  }
}
