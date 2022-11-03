import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { CurrentComponent } from './current/current.component';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DraglistComponent } from './draglist/draglist.component';
import { HistoricalModule } from './historical/historical.module';
import { FullcalendarModule } from './fullcalendar/fullcalendar.module';

@NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardComponent,
    CurrentComponent,
    CalculatorbtcComponent,
    LandingpageComponent,
    DraglistComponent,
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HistoricalModule,
    FullcalendarModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
