import styled from 'styled-components';
import shape1 from '../../../assets/pictures/shape1.svg';

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 0;
  left: -5px;
  width: calc(100% + 5px);
  height: 100vh;
  padding: 25px;
  align-items: center;
  justify-content: center;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.2s ease-in-out;
  z-index: 999;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    background-image: url(${shape1});
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 295px;
    top: 61%;
    right: -95px;
    transform: translateY(-50%);

    @media (min-width: 1150px) {
      display: none;
    }
  }

  @media (min-width: 1150px) {
    transform: translateX(0);
    position: relative;
    height: 100%;
    padding: 0;
    overflow: visible;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 57%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;

  @media (min-width: 1150px) {
    height: auto;
    margin: ${({ vertical }) => (vertical ? 'auto 0' : '0 60px 0 auto')};
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    width: ${({ vertical }) => (vertical ? 'unset' : 'fit-content')};
  }
`;
