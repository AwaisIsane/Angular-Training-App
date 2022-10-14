import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AppState } from './state/app.state';
import { updateLogginCreds } from './dashboard/state/dashboard.action';
import { Logindata } from './login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // loggedin$: Observable<boolean> = this.store.select(state=> state.cred.loggedin);
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //console.log("auth guard can activated called")
    const url: string = state.url;
     const ldata = localStorage.getItem("LoginData") ;
     console.log("ldaata guard can activate",ldata)
     if(ldata  ) {
          const lcred:Logindata = JSON.parse(ldata)
    //  
    
      //console.log("going to dispatch action that shouldnt be dispatched when on login",lcred)
      // this.store.dispatch(updateLogginCreds(lcred)) //this creates infinite loop
       
      if(lcred.loggedin){
       return lcred.loggedin}
     }
      
    return this.store.select(state=>state.cred.loggedin).pipe(
      tap(loggedin=> {
        if(!loggedin){
          console.log('redirecting to login page')
          this.router.navigate(['/login']);
        }
      })
    )
  //}
    //return this.checkLogin(url);
  }
  // checkLogin(url: string): true | UrlTree {
  //   if (this.loggedin$) {
  //     console.log(this.loggedin$)
  //     return this.loggedin;
  //   }

    // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Redirect to the login page
  //   return this.router.parseUrl('/login');
  // }
}
