import { ErrorCode } from '../../../../constants/errorCodes';
import { loading, login, loginFailed, logout } from '../actions';
import userReducer, { initialUserState } from '../user';

describe('user reducer', () => {
  it('should initialize with defaults', () => {
    const state = userReducer(initialUserState, {} as any);
    expect(state).toEqual({ email: null, userId: null, isLoading: false, loginErrorCode: null });
  });

  it('should set user on login', () => {
    const state = userReducer(initialUserState, login(1, 'email'));
    expect(state).toEqual({ email: 'email', userId: 1, isLoading: false, loginErrorCode: null });
  });

  it('should logout logged user', () => {
    const state = userReducer(
      { email: 'email', userId: 1, isLoading: false, loginErrorCode: null },
      logout()
    );
    expect(state).toEqual({ email: null, userId: null, isLoading: false, loginErrorCode: null });
  });

  it('should allow to set loading status', () => {
    const state = userReducer(initialUserState, loading(true));
    expect(state).toEqual({ email: null, userId: null, isLoading: true, loginErrorCode: null });
  });

  it('should allow to set error code', () => {
    const state = userReducer(initialUserState, loginFailed(ErrorCode.CREDENTIALS_INCORRECT));
    expect(state).toEqual({
      email: null,
      userId: null,
      isLoading: false,
      loginErrorCode: ErrorCode.CREDENTIALS_INCORRECT,
    });
  });
});
