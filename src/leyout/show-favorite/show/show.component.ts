import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  show:any
  title:any
  price:any
  servv:any[]=[]
  constructor(private serv :UserServiceService ,
    private tostor:ToastrService){

  }



  ngOnInit():void{
  this.getAll()
this.getAllOreder()
  }
  getAll(){
    this.serv.showFavorite().subscribe((data:any)=>{

this.title=data.data
// this.price=data.data[0].service[0].price
console.log(data.data
);

    })
  }

  delete(id:any){
    this.serv.deletefov(id).subscribe((data:any)=>{
alert('done')
this.getAll()
    })
  }

  getAllOreder(){
    this.serv.order().subscribe((data:any)=>{

    })
  }
}
