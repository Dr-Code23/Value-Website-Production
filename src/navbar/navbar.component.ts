import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { RestgerUserComponent } from 'src/auth/restger-user/restger-user.component';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login:boolean=true
  unlogin:boolean=false
  user:any = null
  profile:any={}
  com:any = null
  uu='user'
  typee='company'

  loginn:boolean=true
  logg:boolean=false
  constructor(private serv :UserServiceService , public dialog: MatDialog,
    private tostor:ToastrService , private router:Router){
  
  }
  ngOnInit():void{
this.serv.user.subscribe((data:any)=>{
  if(data.data.type=='user'){
 this.user=data.data.type
 this.loginn=false
 this.logg=true
 console.log(data.data.type);
 
  }

})

this.serv.com.subscribe((data:any)=>{
  if(data.data.type=='company'){
  this.com=data.data.type
  this.loginn=false
  this.logg=true
  console.log(data.data.type);
  }
})
this.getprofile()


}
getprofile(){
  this.serv.getprofile().subscribe((data:any)=>{
this.profile=data.data
console.log(data.data);

  })
}

logout(){

  this.serv.logout().subscribe((data:any)=>{
   this.user=null
   this.serv.user.next(data)
   this.serv.com.next(data)
   this.logg=false
   this.loginn=true
  localStorage.removeItem('token')
this.router.navigateByUrl('/home')
  })


}

logoutCompany(){

  this.serv.logout().subscribe((data:any)=>{
   this.user=null
   this.serv.user.next(data)
   this.serv.com.next(data)
   this.logg=false
   this.loginn=true
  localStorage.removeItem('token')
this.router.navigateByUrl('/login')
  })


}
  log(){
    this.login=false
    this.unlogin=true
  }


  openForm(){
     
    const dialogRef = this.dialog.open(RestgerUserComponent, {
  
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          
           } 
       });
       
     }
  }
