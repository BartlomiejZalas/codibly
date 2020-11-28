import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { UserStoreContext } from '../../stores/user/userStoreContext';
import { LoginPage } from './login';
import { SecretPage } from './secretPage';

function App() {
  const { isLogged } = useContext(UserStoreContext);

  if (isLogged()) {
    return <SecretPage />;
  } else {
    return <LoginPage />;
  }
}

export default observer(App);
