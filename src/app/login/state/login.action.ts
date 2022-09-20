import { createAction, props } from '@ngrx/store';
import { Logindata} from '../login.model';
export const login = createAction(
  '[Login Page] Login',
  props<{username:string,password:string}>()
);

export const loginSuccess = createAction(
  '[Login Page] LoginSuccess',
  props<Logindata>()
);

export const loginError = createAction(
  '[Login Page] LoginUnsucessfull',
  props<String>()
);