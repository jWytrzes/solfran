import styled, { keyframes } from 'styled-components';

const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999999999;
`;

export const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary} transparent ${({ theme }) => theme.primary} transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`;
