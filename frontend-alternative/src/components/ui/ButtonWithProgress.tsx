import React from 'react';
import { Button, ButtonProps, CircularProgress, styled, withStyles } from '@material-ui/core';

const StyledButton = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    alignSelf: 'center',
    width: '100%',
  },
}))(Button);

const Wrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  position: 'relative',
}));

const CircularProgressStyled = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    margiLeft: -12,
  },
}))(CircularProgress);

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
