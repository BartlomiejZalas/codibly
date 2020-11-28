import React from 'react';
import { UserStore } from './userStore';

const userStore = UserStore.create();

export const UserStoreContext = React.createContext(userStore);

export const UserStoreContextProvider: React.FC = ({ children }) => {
  return <UserStoreContext.Provider value={userStore}>{children}</UserStoreContext.Provider>;
};
