import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from '../../components/theme';
import { rootReducer, userSaga } from '../../redux/reducers';

const EmptyProvider: React.FC = ({ children }) => <>{children}</>;

export class TestWrapperBuilder {
  private themeProvider = EmptyProvider;
  private storeProvider = EmptyProvider;

  public withThemeProvider() {
    this.themeProvider = ({ children }) => (
      <StyledComponentsThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledComponentsThemeProvider>
    );
    return this;
  }

  public withStoreProvider() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(userSaga);
    this.storeProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
    return this;
  }

  public build() {
    const ThemeProvider = this.themeProvider;
    const StoreProvider = this.storeProvider;

    const Wrapper: React.FC = ({ children }) => (
      <ThemeProvider>
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    );
    return Wrapper;
  }
}
