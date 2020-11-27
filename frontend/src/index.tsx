import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { store } from './redux/store';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

const element = (
  <React.StrictMode>
    <StyledComponentsThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <StylesProvider injectFirst={true}>
          <Provider store={store}>
            <App />
          </Provider>
        </StylesProvider>
      </MuiThemeProvider>
    </StyledComponentsThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
