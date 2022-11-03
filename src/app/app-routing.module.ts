import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CalculatorbtcComponent } from './dashboard/calculatorbtc/calculatorbtc.component';
import { CryptodisplayComponent } from './dashboard/historical/cryptodisplay/cryptodisplay.component';
import { CurrentComponent } from './dashboard/current/current.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DraglistComponent } from './dashboard/draglist/draglist.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FullcalendarComponent } from './dashboard/fullcalendar/fullcalendar.component';
import { LandingpageComponent } from './dashboard/landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationformComponent },
  {path:'manage',component:ManageComponent},
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
