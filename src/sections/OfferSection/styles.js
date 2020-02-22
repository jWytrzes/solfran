import styled from 'styled-components';
import shape4 from '../../assets/pictures/shape4.svg';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 30%;
    right: -50%;
    background-repeat: no-repeat;
    z-index: 0;
  }

  ::before {
    content: '';
    background-image: url(${shape4});
    background-size: 100%;
    width: 350px;
    height: 265px;
  }

  ::after {
    display: none;
  }
`;

export const FirstList = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
`;

export const SecondList = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
`;
