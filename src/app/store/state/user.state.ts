
import {IUser} from "../../models/user.interface"

export interface IUserState{
  users: IUser[];
  currentUser?: IUser;
  error?: any
}

export const initialUserState: IUserState = {
  users: null,
  currentUser: null,
  error: null
  //.. add whatever we want in that slice of store
};