import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  order: 3;
  height: 135px;
  position: relative;
  z-index: 5;
  margin-top: 80px;
  top: 4px;

  svg {
    width: 100%;
  }

  @media (min-width: 1150px) {
    margin: auto 0;
  }

  @media (min-width: 1440px) {
    height: 165px;

    svg {
      height: 100%;
      width: auto;
      margin-left: auto;
    }
  }
`;
