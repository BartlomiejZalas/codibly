import { ErrorCode } from '../../../constants/errorCodes';
import { UserActionTypes } from './actionTypes';
import {
  FetchLoginAction,
  LoadingAction,
  LoginAction,
  LoginErrorAction,
  LogoutAction,
} from './types';

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

export const loginFailed = (code: ErrorCode): LoginErrorAction => ({
  type: UserActionTypes.LOGIN_ERROR,
  errorCode: code,
});

export const loading = (isLoading: boolean): LoadingAction => ({
  type: UserActionTypes.LOADING,
  isLoading,
});

export const logout = (): LogoutAction => ({
  type: UserActionTypes.LOGOUT,
});
