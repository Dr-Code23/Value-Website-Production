import { Component } from '@angular/core';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent {
  all:any[]=[]
  Review:any[]=[]
  cat:any[]=[]
  constructor(private serv:UserServiceService){}



  ngOnInit():void{
   this.getAll()
   this.getcat()
  }

getAll(){
this.serv.showService().subscribe((data:any)=>{
this.all=data.data
this.Review=data.data.Review

})
}
getcat(){

  this.serv.showCat().subscribe((data:any)=>{
this.cat=data.categories

  })
}
}
