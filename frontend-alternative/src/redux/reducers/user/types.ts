import { ErrorCode } from '../../../constants/errorCodes';
import { UserActionTypes } from './actionTypes';

export interface UserState {
  userId: number | null;
  email: string | null;
  loginErrorCode: ErrorCode | null;
  isLoading: boolean;
}

export interface LoginAction {
  type: UserActionTypes.LOGIN;
  payload: { userId: number; email: string };
}

export interface LoginErrorAction {
  type: UserActionTypes.LOGIN_ERROR;
  errorCode: ErrorCode;
}

export interface LoadingAction {
  type: UserActionTypes.LOADING;
  isLoading: boolean;
}

export interface LogoutAction {
  type: UserActionTypes.LOGOUT;
}

export interface FetchLoginAction {
  type: UserActionTypes.FETCH_LOGIN;
  email: string;
  password: string;
}

export type UserAction =
  | LoginAction
  | LogoutAction
  | FetchLoginAction
  | LoginErrorAction
  | LoadingAction;
