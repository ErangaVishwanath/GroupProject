import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lost } from './lost';

@Injectable({
  providedIn: 'root'
})
export class LostService {

  private url = "http://localhost:8083/lost/";

  constructor(private http: HttpClient) { }

  saveLost(lost : Lost){
    return this.http.post<Lost>(`${this.url}add`,lost)
  }
}
