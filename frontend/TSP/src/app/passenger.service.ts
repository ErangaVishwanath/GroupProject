import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  private url = "http://localhost:8083/passenger/";
  constructor(private http: HttpClient) { }

  getPassenger(id:number): Observable<Passenger>{
    return this.http.get<Passenger>(`${this.url}get/${id}`)
  }

  /* savePassenger(passenger : Passenger){
    return this.http.post<Passenger>(`${this.url}update/${id}`,passenger)
  } */
}
