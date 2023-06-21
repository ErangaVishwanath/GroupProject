import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = "http://localhost:8083/contact/";

  constructor(private http: HttpClient) { }

  saveContact(contact:Contact) {
    return this.http.post<Contact>(`${this.url}add`,contact)
  }
}
