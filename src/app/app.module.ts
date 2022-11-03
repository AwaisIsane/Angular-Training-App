import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispcardComponent } from './dispcard/dispcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CurrentComponent } from './current/current.component';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { MaterialModule } from './material/material.module';
import { DraglistComponent } from './draglist/draglist.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { DialogComponent } from './dialog/dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login/state/login.reducer';
import { LoginEffects } from './login/state/login.effect';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ManageComponent } from './manage/manage.component';
import { ManageEffects } from './manage/state/manage.effects';
import { userListReducer } from './manage/state/manage.reducer';
import { HistoricalModule } from './historical/historical.module';
import { HistoricalgraphComponent } from './historicalgraph/historicalgraph.component';
import { NgChartsModule } from 'ng2-charts';
import { httpInterceptorProviders } from './httpinterceptor';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DispcardComponent,
    ErrorpageComponent,
    LandingpageComponent,
    CurrentComponent,
    CalculatorbtcComponent,
    LoginComponent,
    // DashboardComponent,
    RegistrationformComponent,
    DraglistComponent,
    FullcalendarComponent,
    DialogComponent,
    ManageComponent,
    HistoricalgraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HistoricalModule,
    DashboardModule,
    EffectsModule.forRoot([LoginEffects,ManageEffects]),
    StoreModule.forRoot({cred:loginReducer,UserList:userListReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgChartsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
