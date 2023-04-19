import { Component ,Input, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReviweServiceService } from '../services/reviwe-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  reviweService!:FormGroup
  sing:any=[]
  id:any
  Review:any={}
  rating:any={}
  ReviewUser:any[]=[]
  loader:boolean=false
  constructor(private serv : ReviweServiceService , private router:Router,
    private tostor:ToastrService , private fb:FormBuilder, 
   private rout:ActivatedRoute){
    this.id= this.rout.snapshot.paramMap.get('id')

  }

  
  ngOnInit():void{
this.createForm()
this.allser()
this.getReviwe()
  }

  createForm(){
    this.reviweService=this.fb.group({
      // service_id:[''],
      comments:[''],
      star_rating:['']
    })
  }

  
send(){
  this.loader=true
  let model=this.creatFoemData()
 this.serv.createReview(model).subscribe((data:any)=>{
  console.log(this.sing);
  this.loader=false
  this.getReviwe()
  this.reviweService.reset()

 })

}
creatFoemData(){
  let newdata = new FormData()


  newdata.append('service_id', this.sing);
console.log(this.sing);


Object.entries(this.reviweService.value).forEach(([key , value]:any)=>{
newdata.append(key, value)
})
return newdata
}
allser(){
  this.serv.showSingelService(this.id).subscribe((data:any)=>{
this.sing=data.data.id
// console.log(data.data);


  })
}
getReviwe(){
this.serv.showReview(this.id).subscribe((data:any)=>{
  this.Review=data.data.comments
  this.rating=data.data.rating
  this.ReviewUser=data.data.user
  // console.log(data.data);
  
    })
  }
}
