import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme, big }) => (big ? theme.font.size.l : '2rem')};
  font-weight: ${({ theme, big }) => (big ? theme.font.weight.bold : theme.font.weight.semiBold)};
  margin: ${({ big }) => (big ? '0 0 40px' : '0 0 15px')};
  color: ${({ color, theme }) => (color ? color : theme.secondary)};
  z-index: 3;
`;

export default Heading;
