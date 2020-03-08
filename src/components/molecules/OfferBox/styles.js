import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.11);
  margin: 0 0 50px;
  z-index: 7;

  @media (min-width: 1150px) {
    margin: 0;
  }
`;

export const StyledHeader = styled.h3`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 15px;
  margin-top: 0;
`;

export const StyledParagraph = styled(Paragraph)`
  height: 105px;
  overflow-y: hidden;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
