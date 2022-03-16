import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    align-items: center;
    color: inherit;
    > img {
      height: 3rem;
    }
  `}
`;
