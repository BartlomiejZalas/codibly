import { UserActionTypes } from './actionTypes';
import { FetchLoginAction, LoginAction, LogoutAction } from './types';

export const fetchLogin = (email: string, password: string): FetchLoginAction => ({
  type: UserActionTypes.FETCH_LOGIN,
  email,
  password,
});

export const login = (userId: number, email: string): LoginAction => ({
  type: UserActionTypes.LOGIN,
  payload: {
    userId,
    email,
  },
});

export const logout = (): LogoutAction => ({
  type: UserActionTypes.LOGOUT,
});
