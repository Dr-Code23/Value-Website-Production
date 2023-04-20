import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLoginGuard } from 'src/core/guard-login.guard';
import { GuardUserGuard } from 'src/core/guard-user.guard';

const routes: Routes = [
  
    

 {path:'cart',
 loadChildren: () =>import('../leyout/cart/cart.module').then(m => m.CartModule),canActivate:[GuardUserGuard]},
 
 {path:'about',
 loadChildren: () =>import('../leyout/about/about.module').then(m => m.AboutModule),canActivate:[GuardUserGuard]},
 {path:'profile',
 loadChildren: () =>import('../leyout/profile-user/profile-user.module').then(m => m.ProfileUserModule)},
 
 {path:'contact',
 loadChildren: () =>import('../leyout/contact/contact.module').then(m => m.ContactModule)},
       
 {path:'details/:id',
 loadChildren: () =>import('../leyout/service/service.module').then(m => m.ServiceModule) ,canActivate:[GuardUserGuard]},
 {path:'show',
 loadChildren: () =>import('../leyout/show-favorite/show-favorite.module').then(m => m.ShowFavoriteModule) ,canActivate:[GuardUserGuard]},
 {path:'order/:id',
 loadChildren: () =>import('../leyout/add-order/add-order.module').then(m => m.AddOrderModule) ,canActivate:[GuardUserGuard]},
       
 {path:'checkoutt',
 loadChildren: () =>import('../leyout/checkout-payment/checkout-payment.module').then(m => m.CheckoutPaymentModule) ,canActivate:[GuardUserGuard]},
 
 {path:'detalisReviwe/:id',
 loadChildren: () =>import('../leyout/detalis-reviwe/detalis-reviwe.module').then(m => m.DetalisReviweModule) ,canActivate:[GuardUserGuard]},
       
 {path:'detalisservice',
 loadChildren: () =>import('../leyout/detalis-services-home/detalis-services-home.module').then(m => m.DetalisServicesHomeModule) ,canActivate:[GuardUserGuard]},
       
]













@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeyoutRoutingModule { }
