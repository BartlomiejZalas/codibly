import { Theme } from '@material-ui/core';
import styled from 'styled-components';

export const SmallScreenOnly = styled.div`
  ${(props: { theme: Theme }) => `
    display: none;
    ${props.theme.breakpoints.up('sm')} {
      display: block;
    }
  `}
`;
