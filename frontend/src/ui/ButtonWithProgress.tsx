import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(2)}px;
    margin-bottom: ${theme.spacing(2)}px;
    align-self: center;
    width: 100%;
  `}
`;

const Wrapper = styled.div`
  ${({ theme }) => `
    margin: ${theme.spacing(1)}px;
    position: relative;
  `}
`;

const CircularProgressStyled = styled(CircularProgress)`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
  `}
`;

interface Props extends ButtonProps {
  isLoading: boolean;
}

const ButtonWithProgress: React.FC<Props> = ({ children, isLoading, disabled, ...rest }) => {
  return (
    <Wrapper>
      <StyledButton {...rest} disabled={disabled || isLoading}>
        {children}
      </StyledButton>
      {isLoading && <CircularProgressStyled size={24} />}
    </Wrapper>
  );
};

export default ButtonWithProgress;
