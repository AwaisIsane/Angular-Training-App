import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    CryptodisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule,    

  ],
  exports:[
    CryptodisplayComponent
  ]
})
export class HistoricalModule { }
