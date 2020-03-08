import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  order: 3;
  height: 135px;
  position: relative;
  z-index: 5;

  svg {
    width: 100%;
  }

  @media (min-width: 1150px) {
    order: 2;
    margin: 50px 0;
  }

  @media (min-width: 1440px) {
    max-height: 230px;
    height: auto;
  }
`;
