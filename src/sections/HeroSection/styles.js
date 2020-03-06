import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.black};
  margin: 15px 0;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  margin-top: auto;
`;
