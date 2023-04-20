import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!:FormGroup
  loader:boolean=false
  constructor(private serv:ContactService , private router:Router,
    private tostor:ToastrService , private fb:FormBuilder, 
   private rout:ActivatedRoute){

  }

  
  ngOnInit():void{
this.createForm()

  }

  createForm(){
    this.contactForm=this.fb.group({
      name:['',[Validators.required,Validators.email]],
      email:['',[Validators.required]],
      message:['',[Validators.required]]

    })
  }

  send(){
this.serv.createContact(this.contactForm.value).subscribe((data:any)=>{
  this.tostor.success('has been sent','',{
    closeButton:true,
    progressBar:true,
    timeOut:1000
  })
})
  }
}
