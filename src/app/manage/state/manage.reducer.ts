import { createReducer, on } from '@ngrx/store'
import { deleteUser, deleteUserSuccess, getUserSucess, updateUser } from './manage.action'
import {UserData} from './user.model'


export const initialState:ReadonlyArray<UserData>  = []

export const userListReducer = createReducer(
    initialState,
    on(getUserSucess,(state,data) => {
        return [...state,...data.userList]
    }),

    on(deleteUserSuccess,(state,{userId}) => {
        return state.filter(dt => userId!==dt.id)
    }),
    on(updateUser,(state,{userData})=> {
        //let data = [...state]
        //const indx = data.findIndex((obj=>obj.id==userData.id));
        //temporarly update all
        let filS = state.filter((ele)=>ele.id!==userData.id)
        filS.push(userData)
        return filS
    })
)