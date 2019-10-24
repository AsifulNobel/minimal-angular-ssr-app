import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomNumberDisplayComponent } from './random-number-display.component';

const routes: Routes = [
  {
    path: '',
    component: RandomNumberDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomNumberDisplayRoutingModule { }
