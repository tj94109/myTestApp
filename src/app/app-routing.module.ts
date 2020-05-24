import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [

  { path: "", component: AuthComponent},
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService]},

  { path: 'apples', loadChildren: () => import('./apples/apples.module').then(m => m.ApplesModule) },

  { path: 'oranges', loadChildren: () => import('./oranges/oranges.module').then(m => m.OrangesModule) },
  
  { path: "**", redirectTo: ""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
