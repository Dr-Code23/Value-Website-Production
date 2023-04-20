import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisServicesHomeRoutingModule } from './detalis-services-home-routing.module';
import { ShowServiceComponent } from './show-service/show-service.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    ShowServiceComponent
  ],
  imports: [
    CommonModule,
    DetalisServicesHomeRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    NgxStarRatingModule
  ]
})
export class DetalisServicesHomeModule { }
