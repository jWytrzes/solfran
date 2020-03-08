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
    transition: fill 0.15s ease-in;
    will-change: fill;
  }

  @media (min-width: 1150px) {
    ${({ vertical }) =>
      vertical &&
      `flex-direction: column;
    margin: auto 0 0;
    justify-content: center;`}
  }
`;

export const StyledLi = styled.li`
  margin-left: 25px;

  @media (min-width: 1150px) {
    ${({ vertical }) =>
      vertical &&
      `width: fit-content;
      margin: 0 auto 20px;
      `}
  }

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    @media (min-width: 1150px) {
      ${({ vertical }) =>
        vertical &&
        `margin-bottom: 0;
      `}
    }
  }

  a {
    display: block;
  }

  :hover {
    svg path {
      fill: ${({ theme, white }) => (white ? theme.secondary : theme.primary)};
    }
  }
`;
