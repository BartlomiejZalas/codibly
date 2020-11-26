import { UserActionTypes } from './actionTypes';

export interface UserState {
  userId: number | null;
  email: string | null;
}

export interface LoginAction {
  type: UserActionTypes.LOGIN;
  payload: { userId: number; email: string };
}
export interface LogoutAction {
  type: UserActionTypes.LOGOUT;
}

export interface FetchLoginAction {
  type: UserActionTypes.FETCH_LOGIN;
  email: string;
  password: string;
}

export type UserAction = LoginAction | LogoutAction | FetchLoginAction;
