import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispcardComponent } from './dispcard/dispcard.component';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CurrentComponent } from './current/current.component';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { MaterialModule } from './material/material.module';
import { DraglistComponent } from './draglist/draglist.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DispcardComponent,
    CryptodisplayComponent,
    ErrorpageComponent,
    LandingpageComponent,
    CurrentComponent,
    CalculatorbtcComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationformComponent,
    DraglistComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
