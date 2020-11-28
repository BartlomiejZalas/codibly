import React from 'react';
import { UserStoreContextProvider } from '../stores/user/userStoreContext';
import Pages from './pages/Pages';
import theme from './theme';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

export const App: React.FC = () => (
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst={true}>
        <UserStoreContextProvider>
          <Pages />
        </UserStoreContextProvider>
      </StylesProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
