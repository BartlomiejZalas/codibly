import { Theme } from '@material-ui/core';
import styled from 'styled-components';

export const BigScreenOnly = styled.div`
  ${(props: { theme: Theme }) => `
    display: none;
    ${props.theme.breakpoints.up('sm')} {
      display: block;
    }
  `}
`;
