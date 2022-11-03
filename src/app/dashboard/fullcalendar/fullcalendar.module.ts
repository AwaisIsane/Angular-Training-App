import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullcalendarComponent } from './fullcalendar.component';



@NgModule({
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DialogComponent,
    FullcalendarComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  exports:[
    FullcalendarComponent
  ]
})
export class FullCalendarModule { }
