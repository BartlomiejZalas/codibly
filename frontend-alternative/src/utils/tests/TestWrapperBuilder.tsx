import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from '../../components/theme';
import { UserStoreContextProvider } from '../../stores/user/userStoreContext';

const EmptyProvider: React.FC = ({ children }) => <>{children}</>;

export class TestWrapperBuilder {
  private themeProvider = EmptyProvider;
  private storeProvider = EmptyProvider;

  public withThemeProvider() {
    this.themeProvider = ({ children }) => (
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    );
    return this;
  }

  public withStoreProvider() {
    this.storeProvider = ({ children }) => (
      <UserStoreContextProvider>{children}</UserStoreContextProvider>
    );
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
