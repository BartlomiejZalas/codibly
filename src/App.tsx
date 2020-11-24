import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => `
    background-color: #fff;
    margin: ${theme.spacing(1)}px;
    padding: ${theme.spacing(1)}px;
    
    ${theme.breakpoints.up('sm')} {
       margin: ${theme.spacing(2)}px;
       padding: ${theme.spacing(2)}px;
    }
  `}
`;

function App() {
  return (
    <div className="App">
      <Container>
        <TextField label="Login" variant="outlined" />
        <TextField label="Password" variant="outlined" type="password" />
        <Button>Login</Button>
      </Container>
    </div>
  );
}

export default App;
