import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {MiddlewareService} from './Services/middleware.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotComponent } from './forgot/forgot.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OTPComponent } from './otp/otp.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CovidApiComponent } from './covid-api/covid-api.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgotComponent,
    LoginComponent,
    ResetpasswordComponent,
    OTPComponent,
    HomepageComponent,
    UserprofileComponent,
    FirstpageComponent,
    CovidApiComponent
  ],
  imports: [
    HttpClientModule,
    OverlayModule,
    BrowserModule,
    FormsModule,
    DataTablesModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'forgot', component: ForgotComponent},
      {path:'login', component:LoginComponent},
      {path:'OTP', component:OTPComponent},
      {path:'reset', component:ResetpasswordComponent},
      {path:'homepage', component:HomepageComponent},
      {path:'signup',component:SignupComponent},
      {path:'main',component:FirstpageComponent},
      {path:'test',component:CovidApiComponent}
      ])
  ],
  providers: [MiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
