import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.11);
  margin: 25px 0;
`;

export const StyledHeader = styled.header`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 15px;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  height: 130px;
  overflow-y: hidden;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
