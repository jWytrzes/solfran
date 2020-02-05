import styled from 'styled-components';

const burgerLine = ({ theme }) => `
  width: 100%;
  height: 2px;
  background-color: ${theme.secondary};
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
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    ${burgerLine}
    content: '';
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`;
