import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  createContact(model:any){
    return this.http.post('https://api.valuclean.co/api/contact-us',model)
  }
}
