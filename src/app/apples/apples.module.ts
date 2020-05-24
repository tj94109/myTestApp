import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplesRoutingModule } from './apples-routing.module';
import { ApplesComponent } from './apples.component';


@NgModule({
  declarations: [ApplesComponent],
  imports: [
    CommonModule,
    ApplesRoutingModule
  ]
})
export class ApplesModule { }
