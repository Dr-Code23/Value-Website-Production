import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddordersComponent } from './addorders/addorders.component';

const routes: Routes = [
  {path:'',component:AddordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOrderRoutingModule { }
