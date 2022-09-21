import {  createReducer, on } from '@ngrx/store';
import { login, loginSuccess } from './login.action';
import { Logindata } from '../login.model';
import { logout } from 'src/app/dashboard/state/dashboard.action';
export const initialState: Logindata = {
    id: "",
    email: "",
    fname: "",
    lname: "",
    password: "",
    loggedin: false,
    status:"",
};

export const loginReducer = createReducer(
    initialState,
    on(loginSuccess, (state, ldata) => {
        return {...state,...ldata}
        
    }),
    on(logout,(state)=>initialState)
  );
