import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { RestgerUserComponent } from 'src/auth/restger-user/restger-user.component';
import { HomeComponent } from 'src/leyout/home/home/home.component';

const routes: Routes = [
  {path:'',
  loadChildren: () =>import('../leyout/home/home.module').then(m => m.HomeModule)},
  {path:'home',
  loadChildren: () =>import('../leyout/home/home.module').then(m => m.HomeModule)},
  
  {path:'',
  loadChildren: () =>import('../leyout/leyout.module').then(m => m.LeyoutModule)},

  {path:'Restger',component:RestgerUserComponent},
  {path:'login',component:LoginComponent},
  {path:'login',
  loadChildren: () =>import('../auth/login/login.module').then(m => m.LoginModule)},
  {path:'forgetpassword',
  loadChildren: () =>import('../auth/forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordModule)},
  {path:'checkcode',
  loadChildren: () =>import('../auth/checkcode/checkcode.module').then(m => m.CheckcodeModule)},
  {path:'restpassword',
  loadChildren: () =>import('../auth/rest-password/rest-password.module').then(m => m.RestPasswordModule)},
  {path:'restgerCompany',
  loadChildren: () =>import('../auth/restgercompany/restgercompany.module').then(m => m.RestgercompanyModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
