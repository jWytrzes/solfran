import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: auto 0 0 auto;
  justify-content: right;
  color: ${({ theme, white }) => (white ? 'white' : theme.secondary)};

  svg path {
    fill: ${({ theme, white }) => (white ? 'white' : theme.secondary)};
  }
`;

export const StyledLi = styled.li`
  margin-left: 25px;

  :first-of-type {
    margin-left: 0;
  }

  a {
    display: block;
  }
`;
