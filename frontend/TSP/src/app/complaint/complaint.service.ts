import { Complaint } from './complaint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private url = "http://localhost:8083/complaint/";

  constructor(private http: HttpClient) { }

  saveComplaint(complaint : Complaint){
    return this.http.post<Complaint>(`${this.url}add`,complaint)
  }
}
