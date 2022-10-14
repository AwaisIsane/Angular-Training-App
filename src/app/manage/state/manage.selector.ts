import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { UserData } from './user.model';
 
 
export const selectUserListS = (state: AppState) => state.UserList;
 

export const selectUserList = createSelector(
    selectUserListS,
    (state: UserData []) => state);