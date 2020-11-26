import { API_URL } from '../../../../constants/urls';
import { mockLogin } from '../../../../utils/tests/http-mocks';
import { login } from '../actions';
import { UserActionTypes } from '../actionTypes';
import { fetchUser } from '../saga';
import { FetchLoginAction } from '../types';
import { runSaga } from 'redux-saga';

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
      expect(dispatched).toEqual([login(123456, 'email')]);
    });
  });
});
