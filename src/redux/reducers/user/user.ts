import { UserActionTypes } from './actionTypes';
import { UserAction, UserState } from './types';

export const initialUserState = {
  userId: null,
  email: null,
};

const userReducer = (state: UserState = initialUserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN: {
      const { userId, email } = action.payload;
      return {
        ...state,
        userId,
        email,
      };
    }
    case UserActionTypes.LOGOUT: {
      return {
        ...state,
        userId: null,
        email: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
