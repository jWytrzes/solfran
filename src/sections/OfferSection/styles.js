import styled from 'styled-components';
import shape4 from '../../assets/pictures/shape4.svg';
import shape6 from '../../assets/pictures/shape6.svg';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: visible;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 30%;
    left: 0;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    z-index: 0;
  }

  ::before {
    content: '';
    background-image: url(${shape4});
    background-size: 100%;
    width: 350px;
    height: 265px;

    @media (min-width: 1150px) {
      background-image: url(${shape6});
      width: 816px;
      height: 646px;
      top: 50%;
      transform: translate(-80%, -18%);
      z-index: 0;
    }

    @media (min-width: 1440px) {
      transform: translate(-77%, -5%);
    }

    @media (max-height: 950px) {
      transform: translate(-77%, -10%);
    }
  }

  ::after {
    content: '';
    background-image: url(${shape4});
    background-size: contain;
    width: 350px;
    height: 265px;
    top: unset;
    left: unset;
    right: 0;
    transform: translateX(50%);
    bottom: -45px;
    z-index: 0;

    @media (min-width: 1150px) {
      width: 434px;
      height: 368px;
      top: 40%;
      transform: translate(89%, 0);
    }
  }
`;

export const FirstList = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  @media (min-width: 1150px) {
    order: 1;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const SecondList = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  @media (min-width: 1150px) {
    order: 3;
  }

  @media (min-width: 1440px) {
    width: 50%;
    margin-left: auto;
  }
`;
