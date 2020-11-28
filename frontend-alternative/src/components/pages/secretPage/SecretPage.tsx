import React from 'react';
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
import { useDispatch } from 'react-redux';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { logout } from '../../../redux/reducers/user/actions';
import { AppDispatch } from '../../../redux/store';

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
  const { email } = useUserAuthentication();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <FullText variant="h6">Secret Page</FullText>
          <Button color="inherit" onClick={() => dispatch(logout())}>
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
          <Link href="#" onClick={() => dispatch(logout())}>
            logout
          </Link>
          .
        </Typography>
      </StyledCard>
    </>
  );
};
