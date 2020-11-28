import { types, flow } from 'mobx-state-tree';
import { api } from '../../api';
import { UserApiResponse } from '../../api/user/types';

export const UserStore = types
  .model({
    email: types.optional(types.maybeNull(types.string), null),
    userId: types.optional(types.maybeNull(types.number), null),
  })
  .views((self) => ({
    isLogged: () => {
      return !!self.email;
    },
  }))
  .actions((self) => ({
    login: flow(function* (email: string, password: string) {
      const user: UserApiResponse = yield api.user.login(email, password);
      self.email = user.email;
      self.userId = user.userId;
    }),
    logout: () => {
      self.email = null;
      self.userId = null;
    },
  }));
