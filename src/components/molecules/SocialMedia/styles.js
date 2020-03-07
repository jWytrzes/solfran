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

  @media (min-width: 1150px) {
    flex-direction: column;
    margin: auto 0 0;
    justify-content: center;
  }
`;

export const StyledLi = styled.li`
  margin-left: 25px;

  :first-of-type {
    margin-left: 0;

    @media (min-width: 1150px) {
      margin-left: 0;
      margin-bottom: 20px;
    }
  }

  a {
    display: block;
  }

  @media (min-width: 1150px) {
    margin-left: 0;
  }
`;
