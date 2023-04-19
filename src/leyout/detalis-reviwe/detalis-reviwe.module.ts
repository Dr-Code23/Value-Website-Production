import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisReviweRoutingModule } from './detalis-reviwe-routing.module';
import { DetalisreviweComponent } from './detalisreviwe/detalisreviwe.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetalisreviweComponent
  ],
  imports: [
    CommonModule,
    DetalisReviweRoutingModule,
    NgxStarRatingModule,
    FormsModule
  ]
})
export class DetalisReviweModule { }
