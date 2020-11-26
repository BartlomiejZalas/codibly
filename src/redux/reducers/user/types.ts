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

export type UserAction = LoginAction | LogoutAction;
