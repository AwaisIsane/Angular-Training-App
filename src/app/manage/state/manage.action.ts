import { createAction, props } from "@ngrx/store";
import { UserData } from "./user.model";

export const getAll = createAction(
    '[Manage Page] GetAll'
)

export const getUserSucess = createAction(
    '[Manage Page] GetAll Success',
    props<{userList:UserData[]}>()
)

export const editUser = createAction(
    '[Manage Page] Edit User',
    props<String>()
)

export const deleteUser = createAction(
    '[Manage Page] Delete User',
    props<{userId:string}>()
)

export const deleteUserSuccess = createAction(
    '[Manage Page] Delete User Success',
    props<{userId:string}>()
)

export const updateUser = createAction(
    '[Manage Page] Update User',
    props<{userData:UserData}>()
)