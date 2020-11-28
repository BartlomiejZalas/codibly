import { combineReducers } from 'redux';
import user from './user/user';

export const rootReducer = combineReducers({ user });

export { default as userSaga } from './user/saga';

export type RootState = ReturnType<typeof rootReducer>;
