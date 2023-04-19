import { Component} from '@angular/core';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serv:UserServiceService){}



  ngOnInit():void{
  this.getuser()
  }
  
 
getuser(){
  this.serv.navUser().subscribe((data:any)=>{
this.serv.user.next(data)
this.serv.com.next(data)

  })
}
}
