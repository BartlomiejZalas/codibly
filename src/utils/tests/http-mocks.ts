import nock from 'nock';
import { LoginApiRequestPayload, UserApiResponse } from '../../api/user/types';
import { API_URL } from '../../constants/urls';

export const mockLogin = (
  bodyChecker: (body: LoginApiRequestPayload) => boolean,
  response?: UserApiResponse,
  code = 200
) => nock(API_URL).post('/login', bodyChecker).reply(code, response);
