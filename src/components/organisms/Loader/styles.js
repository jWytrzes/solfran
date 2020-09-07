import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); }
`;

export const StyledWrapper = styled.div`
  margin: 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
