import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviweServiceService {

  constructor(private http:HttpClient) { }

  createReview(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/create/Review',model)

  }
  showSingelService(id:any){
    return this.http.get('https://valucleaning.erp-everest.com/api/service/' +id)
  }

  showReview(id:any){
    return this.http.get('https://valucleaning.erp-everest.com/api/show/Review/'+id)
  }
  showReviewAll(){
    return this.http.get('https://valucleaning.erp-everest.com/api/Review')
  }
}
