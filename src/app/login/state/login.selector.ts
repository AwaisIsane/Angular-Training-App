import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Logindata } from '../login.model';


export const selectUserCredS = (state: AppState) => state.cred;

export const selectUserCred = createSelector(selectUserCredS,
                                            (state:Logindata)=>state);