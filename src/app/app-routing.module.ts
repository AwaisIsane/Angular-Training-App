import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { CurrentComponent } from './current/current.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  
  {path:"",pathMatch:'full',component:LandingpageComponent},
  {path:"histodata",component:CryptodisplayComponent},
  {path:"current",component:CurrentComponent},
  {path:"btccalc",component:CalculatorbtcComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
