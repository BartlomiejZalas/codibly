import { UserActionTypes } from './actionTypes';
import { UserAction, UserState } from './types';

export const initialUserState = {
  userId: null,
  email: null,
  loginErrorCode: null,
  isLoading: false,
};

const userReducer = (state: UserState = initialUserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN: {
      const { userId, email } = action.payload;
      return {
        ...state,
        userId,
        email,
        loginErrorCode: null,
      };
    }
    case UserActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        loginErrorCode: action.errorCode,
      };
    }
    case UserActionTypes.LOGOUT: {
      return {
        ...state,
        userId: null,
        email: null,
        loginErrorCode: null,
      };
    }
    case UserActionTypes.LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
