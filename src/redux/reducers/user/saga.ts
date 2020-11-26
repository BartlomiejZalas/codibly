import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../api';
import { UserApiResponse } from '../../../api/user/types';
import { login } from './actions';
import { UserActionTypes } from './actionTypes';
import { FetchLoginAction } from './types';

export function* fetchUser(action: FetchLoginAction) {
  const { email, password } = action;
  const user: UserApiResponse = yield call([api.user, api.user.login], email, password);
  yield put(login(user.userId, user.email));
}

function* userSaga() {
  yield takeLatest(UserActionTypes.FETCH_LOGIN, fetchUser);
}

export default userSaga;
