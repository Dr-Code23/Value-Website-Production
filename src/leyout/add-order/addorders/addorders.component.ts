import { Component ,Input} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.css']
})
export class AddordersComponent {
  formAddOrder!:FormGroup
  urls:any[]=[]
  files:any[]= [];
  photoName :any
  show:boolean=false
  formValues:any
  url :any= "";
  photo:any = {
    photoImages:[]
  }
  productForm: any;
id:any
selectedFiles:any
order:any[]=[]
favorite:any[] = []
@Input() data:any={}
  sub:any=[]
  sing:any=[{}]
  ii:any={}
  showOrder:boolean=false
  showOrderfalse:boolean=false
service_id: any;
sliderValue = 50;
idd:any[]=[]
dd:any=[]
disabled = false;
autoTicks=false
invert=false
max = 100;
min = 5;
dataArray = ['data1', 'data2', 'data3'];
showTicks = false;
step = 1;
thumbLabel = false;
value = 0;
vertical=false
tickInterval=1
subServiceIdssubServiceIds:any=[]
showFormDelete:boolean=false
subb: any[] = [
  { id: 1, disabled: false },
  { id: 2, disabled: true },
  { id: 3, disabled: false }
];


  orderData:any=[]
subServiceIds:any=[]
pdf:boolean=false
showserv:any={}
subbb:any=[]
slidervalue:number =50
  constructor(private serv :UserServiceService  , private router:Router,
    private tostor:ToastrService , private fb:FormBuilder,
    private servv:OrderServiceService , private rout:ActivatedRoute){
      this.id= this.rout.snapshot.paramMap.get('id')
  }
  
  
 
  ngOnInit():void{
 
    
this.createForm()
    this.allser()
    this.getSub()
    this.getorder()

  }
  
  onFileChanged(event: any) {
    this.selectedFiles = event.target.files;
    // console.log(this.selectedFiles);
  }
  valueyy:any=''
  // formatLabel(value: number): string {
  //   if (value >= 1000) {
  //     this.valueyy=value
  //     return Math.round(value /   1000) + 'number';

  //   }

  //   return `${value}`;
  // }
  // sele(event:any){
  //   this.valueyy=event.target.value
  //   console.log(this.valueyy);

  // }
  onUpload() {
    //Here you send 'this.selectedFiles' to the server..
  }
  select:any=[
    {"name":"once"},
    {"name":"wekkely"}
    ]
    
createForm(){
  this.formAddOrder=this.fb.group ({
    work_area:['',Validators.required],
    date:['',Validators.required],
    time:['',Validators.required],
    address:['',Validators.required],
    repeat:['',Validators.required],
    // service_id:new FormControl(this.sing),
    // gallery:[''],
    sub_service_id: ['']
  
  })
}
selectPhoto(event:any){
  this.photoName=event.target.value
  this.formAddOrder.get('gallery')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}




}
//   selectPhotoo(event:any){
//     this.photoName=event.target.value
//     this.formAddOrder.get('gallery')?.setValue(event.target.files[0])
// if(event.target.files[0]){
//   for(let i=0; i<File.length; i++){
//     let reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0])
//     reader.onload = (event:any)=>{
//      this.urls.push = event.target.result.addedFiles
//     }
//   }
// }

//   }

// onSelect(event:any) {
//   this.photoName=event.target.value
//       this.formAddOrder.get('gallery')?.setValue(event.target.files[0])
// if(event.target.files[0]){
//  let reader = new FileReader();
//  reader.readAsDataURL(event.target.files[0])
//  reader.onload = (event:any)=>{
//   this.url.push = event.target.result.addedFiles
//  } 
// }
// }
//   onRemove(event:any) {
//     console.log(event);
//     this.files.splice(this.files.indexOf(event), 1);
//   }

public onSelectedFileMultiple(event:any) {
  if (event.target.files.length > 0) {
    const files = event.target.files;
    this.productForm.get('imagePath').setValue(files);
    // console.log(files)
  }
}
// public onFilesChanged(event: any): void {
//   console.log(event.target.files);
//   console.log(this.formAddOrder.value);
// }

// public onSelect(event:any) {
//   if (event.target.files.length > 0) {
//     const files = event.target.files;
//     this.formAddOrder.get('gallery')?.setValue(files);
//     console.log(files)
//   }
  
// }

onSelect(event:any) {
  // console.log(event.addedFiles[0]);
  this.files.push(event.addedFiles[0]);
}
 
onRemove(event:any) {
  // console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}



// addtoFavorite(id:any){
//   this.loader=true

// this.serv.addFavorite({'service_id':this.id}).subscribe((data:any)=>{


//   if('for' in localStorage){
//     this.favorite= JSON.parse(localStorage.getItem('for')!) 
//     let exist = this.favorite.find(item => item.id == id.id)
//     if(exist){
//   this.tostor.success('Service is already in your favorite', '',{
//     closeButton:true,
//     progressBar:true
//   })
//     }else{
//       this.favorite.push(id)
//       localStorage.setItem('for' ,JSON.stringify(this.favorite))
//       this.tostor.success('The service has been added to favourites', '',{
//         closeButton:true,
//         progressBar:true
//       })
//     }
  
//   }else{
//     this.favorite.push(id)
//     localStorage.setItem('for' ,JSON.stringify(this.favorite))
//   } 
//   this.loader=false
// })
// }
  submit(){
    


    // const values = this.idd;
    // this.subServiceIds = Array.isArray(values) ? values.join(',') : values
    // console.log(values);
let model =this.creatFoemData()

  this.serv.createOrder(model).subscribe((data:any)=>{


    // if('for' in localStorage){
    //   this.favorite= JSON.parse(localStorage.getItem('for')!) 
    //   let exist = this.favorite.find(item => item.id == this.id.id)
    //   if(exist){
    // this.tostor.success('Service is already in your favorite', '',{
    //   closeButton:true,
    //   progressBar:true
    // })
    //   }else{
    //     this.favorite.push(this.id)
    //     localStorage.setItem('for' ,JSON.stringify(this.favorite))
    //     this.tostor.success('The service has been added to favourites', '',{
    //       closeButton:true,
    //       progressBar:true
    //     })
    //   }
    
    // }else{
    //   this.favorite.push(this.id)
    //   localStorage.setItem('for' ,JSON.stringify(this.favorite))
    // } 
    
this.data=data.data.id
this.showserv=data.data.service
console.log(this.showserv);
// this.orderData=data.data.address

localStorage.setItem('order_id', this.data)


  this.tostor.success('It has been added  The Category successfully', '', {
    disableTimeOut:false,
   titleClass:"toastr_title",
   messageClass:"toastr_message",
   timeOut:1000,
   onActivateTick:false,
   toastClass:'ngx-toastr'	,
   progressBar	:true,
   easing:'ease-in',
   enableHtml	:true,
   newestOnTop:true,
   tapToDismiss:true,
   positionClass:'toast-top-right',
   closeButton:true,

  })
  this.showOrder=true
  this.pdf=true
  // this.router.navigateByUrl('/checkoutt')
} ,error =>{
  this.showOrderfalse=true
  this.pdf=false
}) 

  }
  submitAddPayment (){
    


    // const values = this.idd;
    // this.subServiceIds = Array.isArray(values) ? values.join(',') : values
    // console.log(values);
let model =this.creatFoemData()

  this.serv.createOrder(model).subscribe((data:any)=>{



    
this.data=data.data.id
this.showserv=data.data.service[0].price
console.log(this.showserv);

// this.orderData=data.data.address

localStorage.setItem('order_id', this.data)
localStorage.setItem('amount',this.showserv)

  this.tostor.success('It has been added  The Category successfully', '', {
    disableTimeOut:false,
   titleClass:"toastr_title",
   messageClass:"toastr_message",
   timeOut:1000,
   onActivateTick:false,
   toastClass:'ngx-toastr'	,
   progressBar	:true,
   easing:'ease-in',
   enableHtml	:true,
   newestOnTop:true,
   tapToDismiss:true,
   positionClass:'toast-top-right',
   closeButton:true,

  })
  this.showOrder=true
  this.router.navigateByUrl('/checkoutt')
  console.log(this.formAddOrder.value);   
} ,error =>{
  this.showOrderfalse=true
}) 

  }
  showmodel(){
    this.showFormDelete=true
  }
  Downloadpdf(){
    this.serv.orderpdf(this.data).subscribe((data:any)=>{
      let bolbb=data.body as Blob
      let url =window.URL.createObjectURL(bolbb)
      window.open(url)
this.tostor.success('don Downloadpdf')
    })
  }
  getSelectedSubServices(): any[] {
    const selectedSubServices: any[] = [];
    for (const subService of this.sub) {
      if (this.formAddOrder.controls['sub_service_id'].value.includes(subService.id)) {
        selectedSubServices.push(subService);
      }
    }
    return selectedSubServices;
  }


  creatFoemData(){
    let newdata = new FormData()
 
    // this.formAddOrder = this.sing.append(this.formAddOrder.value['service_id'])
    newdata.append('service_id', this.sing);
    // for (let i = 0; i < this.sub.length; i++) { this.idd.push(this.sub[i].id) }
    // const subServiceIds = this.getSelectedSubServices().map(subService => subService.id);
    // JSON.stringify(subServiceIds)
    // newdata.append('sub_service_id' , this.sub);

      
    // newdata.append('gallery', this.formAddOrder.get('gallery')?.value);

    Object.entries(this.formAddOrder.value).forEach(([key , value]:any)=>{
      newdata.append(key, value)

      // if(Array.isArray(value)){
      //   value.forEach((value: string | Blob, index: string | number) => {
      //     newdata.append(key[index], value)
      //   })
      // }else {
      //  
      // }
    })
       this.files.forEach((value: string | Blob, index: string | number) => {
          newdata.append(`gallery[${index}]`, value)
        })
return newdata
  }

allser(){
  this.serv.showSingelService(this.id).subscribe((data:any)=>{
this.sing=data.data.id


this.ii=data.data.id
  })
}
  getSub(){
    this.servv.getAllSubService(this.id).subscribe((data:any)=>{
     this.sub =data.data
     this.subbb=data.data.id
     
     
    })
  }
  close(){
    this.showOrder=false
  }


  // mapingusername(data:any[]){
  //   let mappingData = data.map(data =>{
  //     return{
  //         ...data,
  //         sub_service_id:[data.data	,
    
  //     }
  //   })
  //   return mappingData
  //   }


    getorder(){
  this.serv.order().subscribe((data:any)=>{
this.order=data.data[this.id]
this.showserv=data.data.service
// console.log(data.data[this.id]);

  })
}

}

  
 
  