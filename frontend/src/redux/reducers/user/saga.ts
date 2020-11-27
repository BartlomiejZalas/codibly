import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../api';
import { UserApiResponse } from '../../../api/user/types';
import { mapToErrorCode } from '../../../utils/errors';
import { loading, login, loginFailed } from './actions';
import { UserActionTypes } from './actionTypes';
import { FetchLoginAction } from './types';

const delay = (ms: number) => new Promise((res: () => void) => setTimeout(res, ms));

export function* fetchUser(action: FetchLoginAction) {
  const { email, password } = action;
  yield put(loading(true));
  yield delay(1000);
  try {
    const user: UserApiResponse = yield call([api.user, api.user.login], email, password);
    yield put(login(user.userId, user.email));
  } catch (e) {
    yield put(loginFailed(mapToErrorCode(e)));
  }
  yield put(loading(false));
}

function* userSaga() {
  yield takeLatest(UserActionTypes.FETCH_LOGIN, fetchUser);
}

export default userSaga;
