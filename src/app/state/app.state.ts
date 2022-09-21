import { Logindata } from "../login/login.model";
import { UserData } from "../manage/state/user.model";

export interface AppState {
    cred: Logindata,
    errormssg:string,
    UserList:UserData[]
    
  }