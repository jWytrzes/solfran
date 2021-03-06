import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: ${({ vertical }) => (vertical ? 'auto 0 0 auto' : 'auto 0 auto auto')};
  justify-content: right;
  color: ${({ theme, white }) => (white ? 'white' : theme.secondary)};
  position: relative;
  z-index: 10;

  svg path {
    fill: ${({ theme, white }) => (white ? 'white' : theme.secondary)};
    transition: fill 0.15s ease-in;
    will-change: fill;
  }

  @media (min-width: 1150px) {
    margin-left: 0;

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
      margin: 0 auto 20px;`}
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
    height: fit-content;
  }

  svg {
    width: 25px;
    height: 25px;
    display: flex;
    transition: transform 0.15s ease-in-out;
  }

  :hover {
    svg {
      transform: scale(1.1);
      path {
        fill: ${({ theme, white }) => (white ? theme.secondary : theme.primary)};
      }
    }
  }
`;
