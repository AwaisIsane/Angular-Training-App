import { createAction, props } from '@ngrx/store';
import { Logindata } from 'src/app/login/login.model';

export const logout = createAction(
    '[Dashboard Page] logout'
)


export const updateLogginCreds = createAction(
    '[Dashboard Page] updaate loggedin creds',
    props<Logindata>()
)