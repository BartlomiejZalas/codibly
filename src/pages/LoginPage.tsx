import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import energy from '../assets/energy.jpg';

const Background = styled.div`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.light};
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
  ${({ theme }) => `
    background-color: #fff;
    padding: ${theme.spacing(4)}px;
    border-radius: ${theme.spacing(2)}px;
    ${theme.breakpoints.up('sm')} {
       border-radius: 0;
       position: fixed;
       top: 0;
       left: 0;
       bottom: 0;
       width: 250px;
    }
  `}
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
 ${({ theme }) => `
    margin-top: ${theme.spacing(2)}px;
    margin-bottom: ${theme.spacing(2)}px;
    align-self: center;
    width: 30%;
  `} 
`;

const LoginPage: React.FC = () => {
  return (
    <Background>
      <Container>
        <Typography variant="h3" gutterBottom>Login</Typography>
        <Typography color="textSecondary">Welcome to example website.</Typography>
        <Typography color="textSecondary">Please login:</Typography>
        <Form>
          <TextField label="Login" variant="outlined" margin="normal" size="small"/>
          <TextField label="Password" variant="outlined" type="password" margin="normal" size="small"/>
          <StyledButton variant="contained" color="primary">Login</StyledButton>
        </Form>
      </Container>
    </Background>
  );
};

export default LoginPage;