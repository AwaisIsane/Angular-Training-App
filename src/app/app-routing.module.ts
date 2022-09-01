import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptodisplayComponent } from './cryptodisplay/cryptodisplay.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FeaturesComponent } from './features/features.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  
  {path:"",pathMatch:'full',component:LandingpageComponent},
  {path:"histodata",component:CryptodisplayComponent},
  {path:"features",component:FeaturesComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
