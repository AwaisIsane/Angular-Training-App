import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { CurrentComponent } from './current/current.component';
import { DashboardComponent } from './dashboard.component';
import { DraglistComponent } from './draglist/draglist.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { CryptodisplayComponent } from './historical/cryptodisplay/cryptodisplay.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
