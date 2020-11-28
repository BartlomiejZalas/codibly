import { styled, Typography } from '@material-ui/core';
import React from 'react';
import energy from '../../assets/energy.jpg';
import { BigScreenOnly } from '../../ui/BigScreenOnly';
import LoginForm from './LoginForm';

const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  backgroundImage: `url(${energy})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  overflowY: 'auto',
  width: 250,
  [theme.breakpoints.up('sm')]: {
    borderRadius: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
  },
}));

export const LoginPage: React.FC = () => {
  return (
    <Background>
      <Container>
        <Typography variant="h3" gutterBottom={true}>
          Login
        </Typography>
        <BigScreenOnly>
          <Typography color="textSecondary">Welcome to example website.</Typography>
          <Typography color="textSecondary">Please login:</Typography>
        </BigScreenOnly>
        <LoginForm />
      </Container>
    </Background>
  );
};
