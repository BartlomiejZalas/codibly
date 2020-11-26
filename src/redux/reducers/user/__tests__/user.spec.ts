import { login, logout } from '../actions';
import userReducer, { initialUserState } from '../user';

describe('user reducer', () => {
  it('should initialize with defaults', () => {
    const state = userReducer(initialUserState, {} as any);
    expect(state).toEqual({ email: null, userId: null });
  });

  it('should set user on login', () => {
    const state = userReducer(initialUserState, login(1, 'email'));
    expect(state).toEqual({ email: 'email', userId: 1 });
  });

  it('should logout logged user', () => {
    const state = userReducer({ email: 'email', userId: 1 }, logout());
    expect(state).toEqual({ email: null, userId: null });
  });
});
