import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  formProfile!:FormGroup
  formProfileimg!:FormGroup
  formProfilepass!:FormGroup
  AddPaymentForm!:FormGroup
  formValues:any
  profile:any={}
  url :any= "";
  hidebtn:boolean=false
  photoName :any
img:boolean=true
changeimg:boolean=false
  constructor(private serv :UserServiceService , private fb:FormBuilder,
    private toastr:ToastrService , private router:Router){
  
  }
  ngOnInit():void{
this.createForm()
this.createformimg()
this.createFoemPassword()
this.createFormAddPayment()
this.getprofile()


}
createFormAddPayment(){
this.AddPaymentForm=this.fb.group({
  number:['',[Validators.required]],
  exp_month:['',[Validators.required]],
  exp_year:['',[Validators.required]],
  cvc:['',[Validators.required]],

})
}

createForm(){
  this.formProfile=this.fb.group({
    name:[''],
    email:['',[Validators.email]],
    address:[''],
    phone:[''],
    



  })
  this.formValues = this.formProfile.value
}

createformimg(){
  this.formProfileimg=this.fb.group({
    photo:['']
  })
  
}
createFoemPassword(){
this.formProfilepass=this.fb.group({
  current_password:['',[Validators.required]],
  new_password:['',[Validators.required]],
  new_password_confirmation:['',[Validators.required]],

})
}

selectPhtot(event:any){

  this.photoName=event.target.value
  this.formProfileimg.get('photo')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}
this.img=false
this.hidebtn=true

}


update(){
  console.log(this.formProfile.value);
let model= this.creatFoemDataa()
  this.serv.updateProfile(model).subscribe((data:any)=>{
    this.toastr.success('It has been added  The Worker successfully', '', {
      disableTimeOut:false,
     timeOut:1000,
     progressBar	:true,
    })
    this.getprofile()

  },error =>{

  
  })

}

updateimg(){
  
  console.log(this.formProfileimg.value);
  let model= this.creatFoemData()
  this.serv.updateProfile(model).subscribe((data:any)=>{
    this.toastr.success('It has been added  The Worker successfully', '', {
      disableTimeOut:false,
     timeOut:1000,
     progressBar	:true,
    })
      this.getprofile()
  })


}
changePassword(){
  this.serv.changePssword(this.formProfilepass.value).subscribe((data:any)=>{

    this.toastr.success('It has been added  The Worker successfully', '', {
      disableTimeOut:false,
     timeOut:1000,
     progressBar	:true,
    })
  })
}
creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formProfileimg.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}
creatFoemDataa(){
  let newdata = new FormData()
  Object.entries(this.formProfile.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

addPayment(){
  this.img=true
  this.serv.addpayment(this.AddPaymentForm.value).subscribe((data:any)=>{
    this.toastr.success('Logged in successfully','',{
      progressBar:true,
      closeButton:true,
      timeOut:1000
    })
    this.img=false
  })
}
getprofile(){
  this.serv.getprofile().subscribe((data:any)=>{
this.profile=data.data
  })
}


}
