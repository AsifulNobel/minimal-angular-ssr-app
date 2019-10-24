import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomNumberDisplayRoutingModule } from './random-number-display-routing.module';
import { RandomNumberDisplayComponent } from './random-number-display.component';


@NgModule({
  declarations: [RandomNumberDisplayComponent],
  imports: [
    CommonModule,
    RandomNumberDisplayRoutingModule
  ]
})
export class RandomNumberDisplayModule { }
