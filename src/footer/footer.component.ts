import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer:any={}
  facebook:any=''
  constructor(private fb :FormBuilder,private serv:UserServiceService,public dialog: MatDialog,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {
 this.getAllDataFooter()
    }


    getAllDataFooter(){
      this.serv.footer().subscribe((data:any)=>{
    this.footer=data[1].content
    this.facebook=data[1].facebook_url
    console.log(this.facebook);
    
      })
    }
}
