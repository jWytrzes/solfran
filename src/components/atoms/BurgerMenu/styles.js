import styled from 'styled-components';

const burgerLine = ({ theme }) => `
  width: 100%;
  height: 2px;
  position: absolute;
`;

export const StyledButton = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  height: 35px;
  z-index: 9999;
  outline-color: ${({ theme }) => theme.primary};

  @media (min-width: 1150px) {
    display: none;
  }
`;

export const StyledBox = styled.span`
  width: 20px;
  height: 15px;
  display: inline-block;
  position: relative;
`;

export const StyledInner = styled.span`
  ${burgerLine}

  left: 0;
  top: 50%;
  background-color: ${({ theme, isActive }) =>
    isActive ? 'transparent' : theme.secondary};
  transform: translateY(-50%);
  transition: background-color 0.1s ease-in-out;

  &::before,
  &::after {
    ${burgerLine}

    content: '';
    left: 0;
    background-color: ${({ theme }) => theme.secondary};
    transition: transform 0.15s 0.1s ease-in-out;
  }

  &::before {
    top: -6px;
    transform: ${({ isActive }) =>
      isActive
        ? ' translateY(6px) rotate(45deg)'
        : ' translateY(0px) rotate(0deg)'};
  }

  &::after {
    top: 6px;
    transform: ${({ isActive }) =>
      isActive
        ? ' translateY(-6px) rotate(-45deg)'
        : ' translateY(0px) rotate(0deg)'};
  }
`;
