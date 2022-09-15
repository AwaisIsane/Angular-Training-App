import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { CurrentComponent } from './current/current.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DraglistComponent } from './draglist/draglist.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationformComponent },
  // {path:'calendar',component:FullcalendarComponent},
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', component: LandingpageComponent },
      { path: 'histodata', component: CryptodisplayComponent },
      { path: 'current', component: CurrentComponent },
      { path: 'calendar', component: FullcalendarComponent },
      { path: 'btccalc', component: CalculatorbtcComponent },
      { path: 'users', component: DraglistComponent },
      { path: '**', component: ErrorpageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
