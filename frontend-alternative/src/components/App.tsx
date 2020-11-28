import React from 'react';
import Pages from './pages/Pages';
import theme from './theme';
import { store } from '../redux/store';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

export const App: React.FC = () => (
  <React.StrictMode>
    <StyledComponentsThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <StylesProvider injectFirst={true}>
          <Provider store={store}>
            <Pages />
          </Provider>
        </StylesProvider>
      </MuiThemeProvider>
    </StyledComponentsThemeProvider>
  </React.StrictMode>
);
