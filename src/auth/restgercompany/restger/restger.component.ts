import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-restger',
  templateUrl: './restger.component.html',
  styleUrls: ['./restger.component.css']
})
export class RestgerComponent {
  registerForm!:FormGroup
  loader:boolean=false
  showForm:boolean=true
  showFormValue:boolean=false
  constructor(private fb :FormBuilder,private serv:UserServiceService,public dialog: MatDialog,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {
this.creatFormRegister()

    }

    creatFormRegister(){
      this.registerForm=this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        address:['',[Validators.required]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6)]],
        password_confirmation:['',[Validators.required,Validators.minLength(6)]],
        companyId:['',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]],
      })
    }

    Register(){
this.serv.registerCompany(this.registerForm.value).subscribe((data:any)=>{
  this.toastr.success('The account has been activated','',{
    progressBar:true,
    closeButton:true,
    timeOut:1000
  })
  
  let audio = new Audio
  audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
  audio.load()
  audio.play()
  this.router.navigateByUrl('/restgerCompany')
  this.loader=false
  this.showForm=false
  this.showFormValue=true
}, error =>{
  this.toastr.error(error.errors)
let audio = new Audio
audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
audio.load()
audio.play()
this.router.navigateByUrl('/restgerCompany')
this.loader=false
this.showForm=true
})
    }
}
