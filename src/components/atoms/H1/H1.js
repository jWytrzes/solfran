import styled from 'styled-components';

const StyledH1 = styled.h1`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.black};
  margin: 15px 0;

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

export default StyledH1;
