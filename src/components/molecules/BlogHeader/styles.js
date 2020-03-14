import styled from 'styled-components';
import shape8 from '../../../assets/pictures/shape8.svg';

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
  }

  h1 {
    margin: 0;
  }
`;
