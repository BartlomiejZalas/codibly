import React from 'react';
import { useUserAuthentication } from './hooks/useUserAuthentication';
import { LoginPage } from './pages/login';
import { SecretPage } from './pages/secretPage';

function App() {
  const { isLogged } = useUserAuthentication();

  if (isLogged) {
    return <SecretPage />;
  } else {
    return <LoginPage />;
  }
}

export default App;
