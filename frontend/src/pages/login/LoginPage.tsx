import { Theme, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import energy from '../../assets/energy.jpg';
import { SmallScreenOnly } from '../../ui/SmallScreenOnly';
import LoginForm from './LoginForm';

const Background = styled.div`
  ${(props: { theme: Theme }) => `
    background-color: ${props.theme.palette.primary.light};
    background-image: url(${energy});
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
const Container = styled.div`
  ${(props: { theme: Theme }) => `
    background-color: #fff;
    padding: ${props.theme.spacing(4)}px;
    border-radius: ${props.theme.spacing(2)}px;
    overflow-y: auto;
    width: 250px;
    ${props.theme.breakpoints.up('sm')} {
       border-radius: 0;
       position: fixed;
       top: 0;
       left: 0;
       bottom: 0;
    }
  `}
`;

export const LoginPage: React.FC = () => {
  return (
    <Background>
      <Container>
        <Typography variant="h3" gutterBottom={true}>
          Login
        </Typography>
        <SmallScreenOnly>
          <Typography color="textSecondary">Welcome to example website.</Typography>
          <Typography color="textSecondary">Please login:</Typography>
        </SmallScreenOnly>
        <LoginForm />
      </Container>
    </Background>
  );
};
