import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplesComponent } from './apples.component';

const routes: Routes = [{ path: '', component: ApplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplesRoutingModule { }
