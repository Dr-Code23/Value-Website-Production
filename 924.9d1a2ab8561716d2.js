"use strict";(self.webpackChunkWebsite=self.webpackChunkWebsite||[]).push([[924],{3924:(v,l,n)=>{n.r(l),n.d(l,{ProfileUserModule:()=>x});var u=n(6895),d=n(9299),o=n(4006),e=n(4650),m=n(1100),c=n(7185);const p=[{path:"",component:(()=>{class r{constructor(t,a,i,P){this.serv=t,this.fb=a,this.toastr=i,this.router=P,this.profile={},this.url="",this.hidebtn=!1,this.img=!0,this.changeimg=!1}ngOnInit(){this.createForm(),this.createformimg(),this.createFoemPassword(),this.createFormAddPayment(),this.getprofile()}createFormAddPayment(){this.AddPaymentForm=this.fb.group({number:["",[o.kI.required]],exp_month:["",[o.kI.required]],exp_year:["",[o.kI.required]],cvc:["",[o.kI.required]]})}createForm(){this.formProfile=this.fb.group({name:[""],email:["",[o.kI.email]],address:[""],phone:[""]}),this.formValues=this.formProfile.value}createformimg(){this.formProfileimg=this.fb.group({photo:[""]})}createFoemPassword(){this.formProfilepass=this.fb.group({current_password:["",[o.kI.required]],new_password:["",[o.kI.required]],new_password_confirmation:["",[o.kI.required]]})}selectPhtot(t){if(this.photoName=t.target.value,this.formProfileimg.get("photo")?.setValue(t.target.files[0]),t.target.files[0]){let a=new FileReader;a.readAsDataURL(t.target.files[0]),a.onload=i=>{this.url=i.target.result}}this.img=!1,this.hidebtn=!0}update(){console.log(this.formProfile.value);let t=this.creatFoemDataa();this.serv.updateProfile(t).subscribe(a=>{this.toastr.success("It has been added  The Worker successfully","",{disableTimeOut:!1,timeOut:1e3,progressBar:!0}),this.getprofile()},a=>{})}updateimg(){console.log(this.formProfileimg.value);let t=this.creatFoemData();this.serv.updateProfile(t).subscribe(a=>{this.toastr.success("It has been added  The Worker successfully","",{disableTimeOut:!1,timeOut:1e3,progressBar:!0}),this.getprofile()})}changePassword(){this.serv.changePssword(this.formProfilepass.value).subscribe(t=>{this.toastr.success("It has been added  The Worker successfully","",{disableTimeOut:!1,timeOut:1e3,progressBar:!0})})}creatFoemData(){let t=new FormData;return Object.entries(this.formProfileimg.value).forEach(([a,i])=>{t.append(a,i)}),t}creatFoemDataa(){let t=new FormData;return Object.entries(this.formProfile.value).forEach(([a,i])=>{t.append(a,i)}),t}addPayment(){this.img=!0,this.serv.addpayment(this.AddPaymentForm.value).subscribe(t=>{this.toastr.success("Logged in successfully","",{progressBar:!0,closeButton:!0,timeOut:1e3}),this.img=!1})}getprofile(){this.serv.getprofile().subscribe(t=>{this.profile=t.data})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.R),e.Y36(o.qu),e.Y36(c._W),e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:24,vars:2,consts:[[1,"container"],[1,"form"],[3,"formGroup"],[1,"flex-row"],["for","card-number"],["formControlName","number","name","card-number","type","text","value","",1,"card-number"],["for","card-name"],["formControlName","exp_month","name","card-name","type","text","value","",1,"card-name"],["formControlName","exp_year","name","card-name","type","text","value","",1,"card-name"],["formControlName","cvc","name","card-name","type","text","value","",1,"card-name"],["type","submit",1,"card-submit",3,"disabled","click"],["src","https://pngimg.com/uploads/credit_card/credit_card_PNG99.png","alt","Card image",1,"card-image"],[1,"card-image-shadow"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"label",4),e._uU(5,"Card Number"),e.qZA(),e._UZ(6,"input",5),e.qZA(),e.TgZ(7,"div",3)(8,"label",6),e._uU(9,"Exp_month"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",3)(12,"label",6),e._uU(13," Exp_year"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",3)(16,"label",6),e._uU(17,"Cvc"),e.qZA(),e._UZ(18,"input",9),e.qZA(),e.TgZ(19,"div",3)(20,"button",10),e.NdJ("click",function(){return a.addPayment()}),e._uU(21,"Add"),e.qZA()()(),e._UZ(22,"img",11)(23,"div",12),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",a.AddPaymentForm),e.xp6(18),e.Q6J("disabled",a.AddPaymentForm.invalid))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background-color:#d3e9fc;font-family:Source Sans Pro,sans-serif}.container[_ngcontent-%COMP%]{max-width:620px;margin:150px auto 100px}.card-image[_ngcontent-%COMP%]{width:425px;position:absolute;top:-125px;left:100px;z-index:1}.card-image-shadow[_ngcontent-%COMP%]{position:absolute;width:410px;height:253px;top:-113px;left:107px;border-radius:15px;box-shadow:-5px 10px 32px #000;z-index:0}.form[_ngcontent-%COMP%]{border-radius:15px;background-color:#fff;min-width:100%;padding-top:165px;position:relative;box-shadow:-5px 7px 32px #00000059}form[_ngcontent-%COMP%]{padding:15px;display:flex;flex-direction:row;flex-wrap:wrap}.flex-row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}.flex-column[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;flex-wrap:wrap}input.card-number[_ngcontent-%COMP%], input.card-name[_ngcontent-%COMP%], input.card-cvv[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}input[_ngcontent-%COMP%]{padding:10px;height:40px;font-size:18px;border:1px solid #ccc;border-radius:5px;outline-color:#4183f5}input[_ngcontent-%COMP%]:not(.card-cvv, .card-submit)[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block}.table-column[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding-left:15px;width:45%;height:40px;margin-right:10px;border:1px solid #ccc;border-radius:5px;background:url(https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png);background-size:15px;background-repeat:no-repeat;background-position-x:125px;background-position-y:center;font-size:18px;outline-color:#4183f5}.table-column[_ngcontent-%COMP%]:last-child{width:40%}.card-submit[_ngcontent-%COMP%]{width:100%;margin:0 auto;color:#fff;font-size:18px;height:50px;border:none;border-radius:5px;background-color:#2364d2;transition:background-color .25s ease-in-out}.card-submit[_ngcontent-%COMP%]:hover{background-color:#4183f5}"]}),r})()}];let f=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(p),d.Bz]}),r})();var g=n(529),h=n(9602),b=n(9549);let x=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.ez,f,o.UX,o.u5,g.JF,c.Rh.forRoot(),h.FA,b.lN]}),r})()}}]);