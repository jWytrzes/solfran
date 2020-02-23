import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  width: calc(100vw - 50px);
  background-color: white;
  border-radius: 6px;
  padding: 15px;
  z-index: 11;
  max-height: 80vh;
  overflow-y: auto;
`;

export const StyledButton = styled.button`
  margin-left: auto;
  padding: 0;
  border: none;
  background: none;

  svg {
    fill: ${({ theme }) => theme.primary};
  }
`;

export const Layer = styled.div`
  content: '';
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-top: 0;
`;

export const P = styled.p`
  margin: 0;
  position: relative;
`;
