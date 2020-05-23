import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AmplifyService } from "aws-amplify-angular"
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AuthGuardService } from './auth-guard.service';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule

  ],
  providers: [AmplifyService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
