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
return this.http.post('https://api.valuclean.co/api/register', model)
  }

LoginUser(model:any){
    return this.http.post('https://api.valuclean.co/api/login', model)
      }

      logout(){
        return this.http.get('https://api.valuclean.co/api/logout')
      }

      getprofile(){
        return this.http.get('https://api.valuclean.co/api/profile')
      }

      updateProfile(model:any){
        return this.http.post('https://api.valuclean.co/api/update/profile',model)

      }
      changePssword(model:any){
        return this.http.post('https://api.valuclean.co/api/change-password',model)

      }

      navUser(){
        return this.http.get('https://api.valuclean.co/api/profile')
          }


      forgetPassword(model:any){
        return this.http.post('https://api.valuclean.co/api/change/password', model)
      }
      checkCode(model:any){
        return this.http.post('https://api.valuclean.co/api/forgot/check-code', model)

      }

      rsetpassword(model:any){
        return this.http.post('https://api.valuclean.co/api/reset/password', model)

      }

showCat(){
  return this.http.get('https://api.valuclean.co/api/userHome')
}
      showService(){
        return this.http.get('https://api.valuclean.co/api/top-services')
      }
      showSingelService(id:any){
        return this.http.get('https://api.valuclean.co/api/service/' +id)
      }
      addFavorite(id:any){
        return this.http.post('https://api.valuclean.co/api/create/Favorite',id)
      }
      showFavorite(){
        return this.http.get('https://api.valuclean.co/api/Favorite')
      }

      createOrder(model:any){
        return this.http.post<any[]>('https://api.valuclean.co/api/create/Order' , model)
      }
      orderpdf(id:any){
        return this.http.get('https://api.valuclean.co/api/order/pdf/' +id,{observe:'response',responseType:'blob'})

      }
deletefov(id:any){
  return this.http.delete('https://api.valuclean.co/api/delete/Favorite/' +id)
}
make(model:any){
  return this.http.post('https://api.valuclean.co/api/add-payment', model)

}
checkoutpayment(model:any){
return this.http.post('https://api.valuclean.co/api/checkout-payment',model)
}
ordersingel(id:any){
  return this.http.get('https://api.valuclean.co/api/show/order/' +id)

}

order(){
  return this.http.get('https://api.valuclean.co/api/order')
}

registerCompany(model:any){
  return this.http.post('https://api.valuclean.co/api/companyRegister', model)
    }

    showReview(id:any){
      return this.http.get('https://api.valuclean.co/api/show/Review/'+id)
    }

    showReviewAll(){
      return this.http.get('https://api.valuclean.co/api/Review')
    }

    footer(){
      return this.http.get('https://api.valuclean.co/api/footer')
    }


    addpayment(model:any){
      return this.http.post('https://api.valuclean.co/api/add-payment',model)
    }

    getallpayment(){
      return this.http.get('https://api.valuclean.co/api/all-payment')
    }
}
