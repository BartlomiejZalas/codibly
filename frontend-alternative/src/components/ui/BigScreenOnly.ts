import { styled } from '@material-ui/core';

export const BigScreenOnly = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));
