import { mockLogin } from '../../../utils/tests/http-mocks';
import { UserStore } from '../userStore';

describe('userStore', () => {
  describe('views', () => {
    describe('isLogged', () => {
      it('should return false when user data are null', () => {
        const userStore = UserStore.create({ email: null, userId: null });
        expect(userStore.isLogged()).toBe(false);
      });
      it('should return true when user data are set', () => {
        const userStore = UserStore.create({ email: 'email', userId: 1 });
        expect(userStore.isLogged()).toBe(true);
      });
    });
  });
  describe('actions', () => {
    describe('login', () => {
      it('should send request and login user', async () => {
        const userStore = UserStore.create();
        const request = mockLogin(
          (body) => {
            expect(body.email).toBe('email');
            expect(body.password).toBe('password');
            return true;
          },
          { userId: 1, email: 'email' }
        );

        await userStore.login('email', 'password');

        expect(request.isDone()).toBe(true);
        expect(userStore.email).toBe('email');
        expect(userStore.userId).toBe(1);
      });

      it('should rethrow error', async () => {
        const userStore = UserStore.create();
        const request = mockLogin(() => true, undefined, 401);
        expect.assertions(4);

        await expect(userStore.login('email', 'password')).rejects.toEqual(
          Error('Request failed with status code 401')
        );

        expect(request.isDone()).toBe(true);
        expect(userStore.email).toBe(null);
        expect(userStore.userId).toBe(null);
      });
    });
    describe('logout', () => {
      it('should clean user data', () => {
        const userStore = UserStore.create({ email: 'email', userId: 1 });

        userStore.logout();

        expect(userStore.email).toBe(null);
        expect(userStore.userId).toBe(null);
      });
    });
  });
});
