import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';
import { OrderServiceService } from 'src/leyout/add-order/services/order-service.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  makepayment!:FormGroup 
  finishedForm!:FormGroup

  formtsett!:FormGroup
  id:any
  order:any={}
  orders:any=[]
  data:any[]=[]
  @Input() dataa:any={}

  @Input() mymessage: any[]=[];
 checkout:boolean=false
 pdf:boolean=false
 showserv:any=[]
 show:any=''
 allPayment:any=[]
 type:string=''
 token:any=[]
 customer_id:any=[]
 allPaymentid:any=[]
 allPaymenttoken:any=[]
 paymentToken:any=[]
 dd:any[]=[]
  constructor(private serv :UserServiceService  , private router:Router,
    private tostor:ToastrService , private fb:FormBuilder,
    private servv:OrderServiceService , private rout:ActivatedRoute){
      this.id= this.rout.snapshot.paramMap.get('id')

  }
  ngOnInit():void{
    this.createForm()
    this.createfinishedForm()
    this.formtset()
    this.getorder()
    this.getAllPayement()
  }

createForm(){
  this.makepayment=this.fb.group({
    // order_id:['',[Validators.required]],
    number:['',[Validators.required]],
    exp_month:['',[Validators.required]],
    exp_year:['',[Validators.required]],
    cvc:['',[Validators.required]]
  })
}

createfinishedForm(){
  this.finishedForm=this.fb.group({
    // order_id:['',Validators.required],
    // amount:['',Validators.required]
  })
}
formtset(){
  this.formtsett=this.fb.group({

       token:[''],
       customer_id:['']
  })
}
AddPayment(){
  this.orders = JSON.parse(localStorage.getItem('order_id')!)
  this.show =JSON.parse(localStorage.getItem('amount')!)
  console.log(this.showserv);
  let model=this.creatFoemData()
  model.append('order_id',this.orders)
  model.append('amount',this.show)
  this.serv.make(model).subscribe((data:any)=>{
    this.dataa=data.data.id
    this.showserv=data.data.service
    model.append('order_id',this.orders)
     
      // localStorage.setItem('amount',this.showserv)


      console.log(this.showserv);
    // this.orders = JSON.parse(localStorage.getItem('order_id')!)
    alert('done')
    this.checkout=true
  },error =>{
    this.checkout=false
  })

  
}

finished(){
  this.orders = JSON.parse(localStorage.getItem('order_id')!)
  // this.show =JSON.parse(localStorage.getItem('amount')!)
  
  let model=this.creatFoemDataData()
  model.append('order_id',this.orders)
  // model.append('amount',this.show)
  // model.append('token',this.allPayment)
 this.serv.checkoutpayment(model).subscribe((data:any)=>{
  
  this.showserv=data.data.service
  model.append('order_id',this.orders)
  model.append('amount',this.show)
this.pdf=true
 },error =>{
  this.pdf=false
 }) 
}

test(){
  
  if(this.allPayment ==this.formtsett.value.repeattt){
    console.log('ahmed');
    
    }

console.log(this.formtsett.value.repeattt);
return this.formtsett.value .repeattt
}
Downloadpdf(){
  this.serv.orderpdf(this.orders).subscribe((data:any)=>{
    console.log(this.data);
    
    let bolbb=data.body as Blob
    let url =window.URL.createObjectURL(bolbb)
    window.open(url)
this.tostor.success('don Downloadpdf')
  })
}
creatFoemData(){
  let newdata = new FormData()

  // this.formAddOrder = this.sing.append(this.formAddOrder.value['service_id'])
  // newdata.append('order_id', this.orders);
    newdata.append('customer_id', this.orders);

Object.entries(this.makepayment.value).forEach(([key , value]:any)=>{
newdata.append(key, value)
})
return newdata
}

creatFoemDataData(){
  let newdata = new FormData()

  // this.formAddOrder = this.sing.append(this.formAddOrder.value['service_id'])
  // newdata.append('order_id', this.orders);
  // newdata.append('token',this.test())
  // newdata.append('customer_id',this.allPaymentid)
  // newdata.append('token',this.allPayment)
  console.log(this.formtsett.value.token);

  for(let i=0;i< this.dd.length;i++){
       if(this.formtsett.value.token==this.dd[i].id){
           newdata.append('customer_id',this.dd[i].customer)
           newdata.append('token',this.dd[i].id)
           console.log(this.dd[i].id);
           console.log(this.dd[i].customer);

       }
       
  }
Object.entries(this.finishedForm.value).forEach(([key , value]:any)=>{
newdata.append(key, value)
})
return newdata
}

getorder(){
  this.serv.order().subscribe((data:any)=>{
this.order=data.data[this.id]
// this.showserv=data.data.service
// console.log(data.data[this.id]);

  })
}


getAllPayement(){
  this.serv.getallpayment().subscribe((data:any)=>{
this.allPayment=data.data
this.dd=data.data
this.allPaymentid=data.data.customer
this.paymentToken=data.data

  })


}

// select(event:any){
// this.type=event.value
// this.getAllPayement()
// console.log(this.type);

// }

}
