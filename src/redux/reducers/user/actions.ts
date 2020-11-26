import { UserActionTypes } from './actionTypes';
import { LoginAction, LogoutAction } from './types';

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
