import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, mergeMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import * as Managepageaction from './manage.action'
@Injectable()
export class ManageEffects {
    loadUsers$ = createEffect(()=>this.actions$.pipe(
        ofType(Managepageaction.getAll),
        mergeMap(()=>this.authSrv.getAll().pipe(
            // map(users=>{console.log("here");return ({ type: '[Manage Page] GetAll Success', payload: users })})
            map(users=> Managepageaction.getUserSucess({userList:users}))
        )),
        catchError(()=>EMPTY)
    ))

    constructor(private authSrv:AuthService,private actions$: Actions,){}
}