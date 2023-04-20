import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from 'src/auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from 'src/auth/login/login.module';
import { CoreModule } from 'src/core/core.module';
import { HomeModule } from 'src/leyout/home/home.module';
import { ForgetpasswordModule } from 'src/auth/forgetpassword/forgetpassword.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FooterComponent } from 'src/footer/footer.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CheckoutPaymentModule } from 'src/leyout/checkout-payment/checkout-payment.module';

import {MatSliderModule} from '@angular/material/slider';
import { DetalisReviweModule } from 'src/leyout/detalis-reviwe/detalis-reviwe.module';

@NgModule({
  declarations: [
    AppComponent,
NavbarComponent,
FooterComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule, FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarRatingModule,
    ToastrModule.forRoot(),
    CoreModule,
     AuthModule,
    LoginModule,
    NgxMaterialTimepickerModule,
    ForgetpasswordModule,
    CheckoutPaymentModule,
    MatSliderModule,
    DetalisReviweModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
