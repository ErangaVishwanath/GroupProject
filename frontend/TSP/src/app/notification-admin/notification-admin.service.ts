import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationAdminService {

private url="http://localhost:8080/driver/";

  // constructor(private http:HttpClient) { }

  // //Get all admin
  // getAllAdmin():Observable<any[]>{
  //   return.this.http.get<any[]>(this.url+'get')
  // }

  // //Get admin by Id
  // getAdminById(id:number):Observable<Admin>{
  //   return this.http.get<Admin>(`${this.url}find/${id}`)
  // }

}
