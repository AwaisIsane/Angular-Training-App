import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CalculatorbtcComponent } from './calculatorbtc/calculatorbtc.component';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { CurrentComponent } from './current/current.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationformComponent},
  {path:'',component:DashboardComponent,canActivate:[AuthGuard],children:[
   {path:"",pathMatch:'full',component:LandingpageComponent},
  {path:"histodata",component:CryptodisplayComponent},
  {path:"current",component:CurrentComponent},
  {path:"btccalc",component:CalculatorbtcComponent},
  {path:"**",component:ErrorpageComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
