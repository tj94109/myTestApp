import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrangesComponent } from './oranges.component';

const routes: Routes = [{ path: '', component: OrangesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrangesRoutingModule { }
