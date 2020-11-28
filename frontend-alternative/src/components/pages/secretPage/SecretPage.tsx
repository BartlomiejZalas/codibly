import React, { useContext } from 'react';
import {
  AppBar,
  Paper,
  Theme,
  Toolbar,
  Typography,
  Link,
  Button,
  withStyles,
} from '@material-ui/core';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import { UserStoreContext } from '../../../stores/user/userStoreContext';

const StyledCard = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
}))(Paper);

const FullText = withStyles({
  root: {
    flex: 1,
  },
})(Typography);

export const SecretPage: React.FC = () => {
  const { email, logout } = useContext(UserStoreContext);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <FullText variant="h6">Secret Page</FullText>
          <Button color="inherit" onClick={() => logout()}>
            <PowerSettingsNewOutlinedIcon />
            &nbsp;Logout
          </Button>
        </Toolbar>
      </AppBar>
      <StyledCard>
        <Typography variant="h3" gutterBottom={true}>
          Hello!
        </Typography>
        <Typography gutterBottom={true}>
          Nice to see you <strong>{email}</strong>. You have been successfully logged in.
        </Typography>
        <Typography gutterBottom={true}>
          You can now{' '}
          <Link href="#" onClick={() => logout()}>
            logout
          </Link>
          .
        </Typography>
      </StyledCard>
    </>
  );
};
