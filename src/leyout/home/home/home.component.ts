import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from 'src/auth/service/user-service.service';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';

import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cart:any[] = []
  all:any[]=[]
  user:any = null
  cat:any[]=[]
  loader:boolean=false
  insertChat:boolean=false
  insertIcon:boolean=true
  userChat:any[]=[]
  datarom:any[]=[]
  messages:any[]=[];
  dataShow:any[]=[];
  message='';
  showMessage:any[]=[]
public data:any
odlMessages:any[]=[]
recording:boolean=false
record:any
options:any[]=[]
url:any=''
error:any=''
imgs:boolean=false
  // successCallback: any;
  // errorCallback: any;
constructor(private serv:UserServiceService , private router:Router,private http:HttpClient,
  
  private domSanitizer:DomSanitizer
  ){}



ngOnInit():void{
 

this.getcat()
this.getAll()
this.get()

  Pusher.logToConsole = true;

      var pusher = new Pusher('cbe947b09a127d1d6084', {
        cluster: 'mt1',

      });
      const channel = pusher.subscribe('new-message');
      channel.bind('new-message', (data:any) =>{
        console.log(data.message.message);
        
        return this.messages.push(data.message.message);

      });
}


  channel(channel: any) {
    throw new Error('Method not implemented.');
  }

  submit(){
    return this.http.post('https://adminpanel.valuclean.co/api/store-message',{

       message:this.message,
     
      //  photo:this.url,
      // room_id:17 
       // token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZhbHVjbGVhbmluZy5lcnAtZXZlcmVzdC5jb20vYXBpL0FkbWluL0xvZ2luIiwiaWF0IjoxNjgwOTI4MDM2LCJuYmYiOjE2ODA5MjgwMzYsImp0aSI6IkZXdVVQN0VTQzZGSjZBTVUiLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.NAHFuRt_somSzZxa1BT1UVh_4LOaC2FyhnOgjD69iKg'
     }).subscribe(()=>this.message='');
     this.imgs=true
   }
 
   select(event:any){
     this.message=event.target.value;
     // this.messages.push({message:this.message})
   }
 

getAll(){
this.serv.showService().subscribe((data:any)=>{
  for(let i=0;i<data.data.length;i++){
    this.all.push(data.data[i])

    if(i==7){
      console.log(this.all);
  break
    }

    
  }


})
}

getcat(){

  this.serv.showCat().subscribe((data:any)=>{
this.cat=data.categories

  })
}
logout(){
  // this.serv.user.next(data)
  localStorage.removeItem('token')
  this.router.navigateByUrl('/login')

}
checkChat(){
  this.insertIcon=false
  this.insertChat=true
}
closeChat(){
  this.insertIcon=true
  this.insertChat=false
}

get(){
  this.data =this.http.post('https://valucleaning.erp-everest.com/api/room-messages',{
    id:7
  })
  .subscribe(
    (responseData)=>{
      this.data=responseData
      this.odlMessages=this.data.data
    },error =>{
      console.error(error);
      
    }
  )
  
  } 
  // send record
  sanitize(url:string){
    return this.domSanitizer.bypassSecurityTrustUrl(url);
}

start(){
  this.recording=true
  let mediaConstraints = {
    video:true,
    audio:true,
  };
 
  navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this),this.errorCallback.bind(this))
  return this.url
}
successCallback(stream:any){
const options:any = {
  mimeType:'audio/wav'
};
var stereoAudioRecorder = RecordRTC.StereoAudioRecorder;
this.record = new stereoAudioRecorder(stream, options)
this.record.record()
}
public stop(){
  this.recording=false
  this.record.stop(this.processRecording.bind(this))

}
processRecording(blob:any): void{
this.url= URL.createObjectURL(blob)
return this.url
}
errorCallback(error:any){
alert('onn')
}

// end send record
}
