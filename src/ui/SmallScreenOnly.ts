import styled from 'styled-components';

export const SmallScreenOnly = styled.div`
  ${({ theme }) => `
    display: none;
    ${theme.breakpoints.up('sm')} {
      display: block;
    }
  `}
`;
