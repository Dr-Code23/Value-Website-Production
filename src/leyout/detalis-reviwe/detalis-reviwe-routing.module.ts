import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisreviweComponent } from './detalisreviwe/detalisreviwe.component';

const routes: Routes = [
  {path:'',component:DetalisreviweComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalisReviweRoutingModule { }
