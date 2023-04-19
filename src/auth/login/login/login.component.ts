import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/auth/service/user-service.service';
import { RestgerUserComponent } from 'src/auth/restger-user/restger-user.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  loader:boolean=false
  loginn:boolean=true
  unlogin:boolean=false
  user:any = null
  showError:boolean=false
  constructor(private fb :FormBuilder,private serv:UserServiceService,public dialog: MatDialog,
    private toastr: ToastrService,
    private router:Router) { } 

ngOnInit(): void {
this.creatFormLogin()

    }
    creatFormLogin(){
      this.loginForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
        type:['']
      })
          }
 
          // login(){
          //   this.loader=true
          //   this.serv.LoginUser(this.loginForm.value).subscribe((data:any)=>{
          //     if(data.type.user)
          //     this.serv.user.next(data)
          //     localStorage.setItem('token',data.token)
          //     this.toastr.success('Logged in successfully','',{
          //       progressBar:true,
          //       closeButton:true,
          //       timeOut:1000
          //     })
              
          //     let audio = new Audio
          //     audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
          //     audio.load()
          //     audio.play()
          //     this.loader=false
          //     this.router.navigateByUrl('/home')
          //   }, error =>{
          //     this.toastr.error('Email Or Password Is Not Valid', '', {
          //       progressBar:true,
          //       closeButton:true,
          //       timeOut:1000
          //     })
          //     let audio = new Audio
          //     audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
          //     audio.load()
          //     audio.play()
          //     this.loader=false
          //     this.showError=true
          //   })
          // }
          login(){
            this.serv.LoginUser(this.loginForm.value).subscribe((data:any)=>{
                   if(data.data.type == 'user'){
                    this.serv.user.next(data)
                    this.serv.com.next(data)

                        localStorage.setItem('token',data.token)
                        this.toastr.success('Logged in successfully','',{
                          progressBar:true,
                          closeButton:true,
                          timeOut:1000
                        })
                        
                        let audio = new Audio
                        audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
                        audio.load()
                        audio.play()
                        this.loader=false
                        this.router.navigateByUrl('/home')
                 }else{
                  this.serv.user.next(data)
                  this.serv.com.next(data)

                  localStorage.setItem('token',data.token)
                  this.toastr.success('Logged in successfully','',{
                    progressBar:true,
                    closeButton:true,
                    timeOut:1000
                  })
                  
                  let audio = new Audio
                  audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
                  audio.load()
                  audio.play()
                  this.loader=false
                  this.router.navigateByUrl('/about')
                    }
            })
          }

          openForm(){
     
            const dialogRef = this.dialog.open(RestgerUserComponent, {
               width:'800px',
               height:'700px',
               
             disableClose : true
               });
           
               dialogRef.afterClosed().subscribe(result => {
                 if (result == true){
                  
                   } 
               });
               
             }
}
