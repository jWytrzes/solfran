import styled from 'styled-components';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  margin: auto 0;
`;

export const StyledParagraph = styled(Paragraph)`
  @media (min-width: 992px) {
    max-width: 50%;
  }
`;
