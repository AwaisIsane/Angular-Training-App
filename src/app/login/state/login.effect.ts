import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError,exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as Loginpageaction from './login.action'
@Injectable()
export class LoginEffects {
 
   login$ = createEffect(() => this.actions$.pipe(
     ofType(Loginpageaction.login),
     exhaustMap((action) => this.authsrv.login(action.username,action.password)
       .pipe(
         map(logcred => {
            return Loginpageaction.loginSuccess(logcred)}),
//catchError(error => of(Loginpageaction.loginError({ error })))
          catchError(()=>EMPTY)
       ))
     )
   );
 
  constructor(
    private actions$: Actions,
    private authsrv: AuthService
  ) {}
}