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
  cursor: pointer;
  z-index: 99;

  @media (min-width: 1150px) {
    margin: 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  height: calc(1.4rem * 5 * 1.45);
  overflow-y: hidden;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
