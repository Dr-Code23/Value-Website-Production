import { ThisReceiver } from '@angular/compiler';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  favorite:any[] = []
  all:any={}
  id:any
  formfavorite!:FormGroup
  loader:boolean=false
  ALLReview:any[]=[]
  Review:any[]=[]
  rating:any={}
  Reviewid:any={}
  ReviewUser:any[]=[]
  constructor(private serv :UserServiceService , private router:ActivatedRoute,
  private tostor:ToastrService , private fb:FormBuilder){

  this.id= this.router.snapshot.paramMap.get('id')
}



ngOnInit():void{
  this.createForm()
this.getAll()
this.getAllReview()
}
createForm(){
  this.formfavorite=this.fb.group({
    service_id:['',[Validators.required]]
  })
}
 getAll(){
   this.loader=true 
   this.serv.showSingelService(this.id).subscribe((data:any)=>{
 this.all=data.data
//  this.ReviewUser=data.data.Review
 this.loader=false

 })
 }
addtoFavorite(id:any){
  this.loader=true

this.serv.addFavorite({'service_id':this.id}).subscribe((data:any)=>{


  if('for' in localStorage){
    this.favorite= JSON.parse(localStorage.getItem('for')!) 
    let exist = this.favorite.find(item => item.id == id.id)
    if(exist){
  this.tostor.success('Service is already in your favorite', '',{
    closeButton:true,
    progressBar:true
  })
    }else{
      this.favorite.push(id)
      localStorage.setItem('for' ,JSON.stringify(this.favorite))
      this.tostor.success('The service has been added to favourites', '',{
        closeButton:true,
        progressBar:true
      })
    }
  
  }else{
    this.favorite.push(id)
    localStorage.setItem('for' ,JSON.stringify(this.favorite))
  } 
  this.loader=false
})
}
 getAllReview(){
   this.serv.showReview(this.id).subscribe((data:any)=>{

 this.Review=data.data.comments
 this.rating=data.data.rating
 this.ReviewUser=data.data.user
  this.Reviewid=data.data.id

   })
 }

getAllReviewAll(){
  this.serv.showReviewAll().subscribe((data:any)=>{
console.log(data.data);


  })
}
}
