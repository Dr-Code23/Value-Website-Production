import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }


  getAllSubService(id:any){
  
      return this.http.get('https://valucleaning.erp-everest.com/api/all/SubService/'+id)
    }

}
