import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
user=new Subject()
com=new Subject()
  constructor(private http:HttpClient) { }

  registerUser(model:any){
return this.http.post('https://valucleaning.erp-everest.com/api/register', model)
  }

LoginUser(model:any){
    return this.http.post('https://valucleaning.erp-everest.com/api/login', model)
      }

      logout(){
        return this.http.get('https://valucleaning.erp-everest.com/api/logout')
      }

      getprofile(){
        return this.http.get('https://valucleaning.erp-everest.com/api/profile')
      }
  
      updateProfile(model:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/update/profile',model)

      }
      changePssword(model:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/change-password',model)

      }

      navUser(){
        return this.http.get('https://valucleaning.erp-everest.com/api/profile')
          }
    
   
      forgetPassword(model:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/change/password', model)
      }
      checkCode(model:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/forgot/check-code', model)

      }

      rsetpassword(model:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/reset/password', model)

      }
      
showCat(){
  return this.http.get('https://valucleaning.erp-everest.com/api/userHome')
}
      showService(){
        return this.http.get('https://valucleaning.erp-everest.com/api/top-services')
      }
      showSingelService(id:any){
        return this.http.get('https://valucleaning.erp-everest.com/api/service/' +id)
      }
      addFavorite(id:any){
        return this.http.post('https://valucleaning.erp-everest.com/api/create/Favorite',id)  
      }
      showFavorite(){
        return this.http.get('https://valucleaning.erp-everest.com/api/Favorite')
      }

      createOrder(model:any){
        return this.http.post<any[]>('https://valucleaning.erp-everest.com/api/create/Order' , model)
      }
      orderpdf(id:any){
        return this.http.get('https://valucleaning.erp-everest.com/api/order/pdf/' +id,{observe:'response',responseType:'blob'})

      }
deletefov(id:any){
  return this.http.delete('https://valucleaning.erp-everest.com/api/delete/Favorite/' +id)
}
make(model:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/add-payment', model)

}
checkoutpayment(model:any){
return this.http.post('https://valucleaning.erp-everest.com/api/checkout-payment',model)
}
ordersingel(id:any){
  return this.http.get('https://valucleaning.erp-everest.com/api/show/order/' +id)

}

order(){
  return this.http.get('https://api.valuclean.co/api/order')
}

registerCompany(model:any){
  return this.http.post('https://valucleaning.erp-everest.com/api/companyRegister', model)
    }

    showReview(id:any){
      return this.http.get('https://valucleaning.erp-everest.com/api/show/Review/'+id)
    }
    
    showReviewAll(){
      return this.http.get('https://valucleaning.erp-everest.com/api/Review')
    }

    footer(){
      return this.http.get('https://valucleaning.erp-everest.com/api/footer')
    }


    addpayment(model:any){
      return this.http.post('https://valucleaning.erp-everest.com/api/add-payment',model)
    }

    getallpayment(){
      return this.http.get('https://valucleaning.erp-everest.com/api/all-payment')
    }
}
