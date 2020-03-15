import styled from 'styled-components';
import shape8 from '../../../assets/pictures/shape8.svg';
import shape7 from '../../../assets/pictures/shape7.svg';

export const StyledWrapper = styled.div`
  padding: 50px 25px;
  text-align: right;
  color: white;
  position: relative;
  z-index: 10;

  ::before {
    content: '';
    position: absolute;
    width: 362px;
    height: 150px;
    background-image: url(${shape8});
    background-size: cover;
    right: 0;
    top: 0;
    z-index: 0;

    @media (min-width: 1150px) {
      background-image: url(${shape7});
      width: 607px;
      height: 188px;
    }
  }

  h1 {
    margin: 0;
  }

  @media (min-width: 1150px) {
    padding: 50px 12.5%;
  }
`;
