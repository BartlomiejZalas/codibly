import React from 'react';
import { useUserAuthentication } from '../hooks/useUserAuthentication';
import { LoginPage } from './login';
import { SecretPage } from './secretPage';

function App() {
  const { isLogged } = useUserAuthentication();

  if (isLogged) {
    return <SecretPage />;
  } else {
    return <LoginPage />;
  }
}

export default App;
