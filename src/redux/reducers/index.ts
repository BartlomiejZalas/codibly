import { combineReducers } from 'redux';
import user from './user/user';

export const rootReducer = combineReducers({ user });

export type RootState = ReturnType<typeof rootReducer>;
