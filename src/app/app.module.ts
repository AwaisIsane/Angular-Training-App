import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { MaterialModule } from './material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login/state/login.reducer';
import { LoginEffects } from './login/state/login.effect';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ManageComponent } from './manage/manage.component';
import { ManageEffects } from './manage/state/manage.effects';
import { userListReducer } from './manage/state/manage.reducer';
import { NgChartsModule } from 'ng2-charts';
import { httpInterceptorProviders } from './httpinterceptor';
import { DashboardModule } from './dashboard/dashboard.module';
// import { FullcalendarModule } from './fullcalendar/fullcalendar.module';

@NgModule({
  declarations: [
    AppComponent,
    // DispcardComponent, component not in use
    ErrorpageComponent,
    LoginComponent,
    RegistrationformComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    DashboardModule,
//    FullcalendarModule,
    EffectsModule.forRoot([LoginEffects,ManageEffects]),
    StoreModule.forRoot({cred:loginReducer,UserList:userListReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgChartsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
