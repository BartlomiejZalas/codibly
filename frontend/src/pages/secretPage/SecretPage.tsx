import React from 'react';
import { AppBar, Paper, Theme, Toolbar, Typography, Link, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { logout } from '../../redux/reducers/user/actions';
import { AppDispatch } from '../../redux/store';

const StyledCard = styled(Paper)`
  ${(props: { theme: Theme }) => `
    margin: ${props.theme.spacing(4)}px;
    padding: ${props.theme.spacing(4)}px;
  `}
`;

const FullText = styled(Typography)`
  flex: 1;
`;

export const SecretPage: React.FC = () => {
  const { email } = useUserAuthentication();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <FullText variant="h6">Secret Page</FullText>
          <Button color="inherit" onClick={() => dispatch(logout())}>
            Logout
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
