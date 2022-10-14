import {  createReducer, on } from '@ngrx/store';
import { login, loginSuccess } from './login.action';
import { Logindata } from '../login.model';
import { logout,updateLogginCreds } from 'src/app/dashboard/state/dashboard.action';
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
        console.log("here save inside loginsucess reducer",ldata)
        const ldat:Logindata = {id:ldata.id,
        email: ldata.email,
        fname: ldata.fname,
        lname: ldata.lname,
        password: ldata.password,
        loggedin: ldata.loggedin,
        status:ldata.status,}
        localStorage.setItem("LoginData",JSON.stringify(ldat))
        return {...state,...ldata}
        
    }),
    on(logout,(state)=>{
        localStorage.removeItem("LoginData");
        return {...initialState}}),
    on(updateLogginCreds,(state,ldata:Logindata)=> {
       // localStorage.setItem("LoginData",JSON.stringify(ldata))
        console.log("update creds",ldata)
        return {...state,...ldata}
    })
  );
