import { runSaga } from 'redux-saga';
import { ErrorCode } from '../../../../constants/errorCodes';
import { mockLogin } from '../../../../utils/tests/http-mocks';
import { loading, login, loginFailed } from '../actions';
import { UserActionTypes } from '../actionTypes';
import { fetchUser } from '../saga';
import { FetchLoginAction } from '../types';

describe('user saga ', () => {
  describe('fetchUser', () => {
    it('should do login request and return user', async () => {
      const dispatched: unknown[] = [];
      const action: FetchLoginAction = {
        type: UserActionTypes.FETCH_LOGIN,
        email: 'email',
        password: 'password',
      };

      const loginRequest = mockLogin(
        (body) => {
          expect(body.email).toBe('email');
          expect(body.password).toBe('password');
          return true;
        },
        { userId: 123456, email: 'email' }
      );

      await runSaga({ dispatch: (a) => dispatched.push(a) }, fetchUser as any, action).toPromise();

      expect(loginRequest.isDone()).toBe(true);
      expect(dispatched).toEqual([loading(true), login(123456, 'email'), loading(false)]);
    });

    it('should handle login request error', async () => {
      const dispatched: unknown[] = [];
      const action: FetchLoginAction = {
        type: UserActionTypes.FETCH_LOGIN,
        email: 'email',
        password: 'password',
      };

      const loginRequest = mockLogin(() => true, undefined, 500);

      await runSaga({ dispatch: (a) => dispatched.push(a) }, fetchUser as any, action).toPromise();

      expect(loginRequest.isDone()).toBe(true);
      expect(dispatched).toEqual([
        loading(true),
        loginFailed(ErrorCode.GENERAL_HTTP_ERROR),
        loading(false),
      ]);
    });
  });
});
