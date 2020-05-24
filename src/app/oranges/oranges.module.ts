import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrangesRoutingModule } from './oranges-routing.module';
import { OrangesComponent } from './oranges.component';


@NgModule({
  declarations: [OrangesComponent],
  imports: [
    CommonModule,
    OrangesRoutingModule
  ]
})
export class OrangesModule { }
