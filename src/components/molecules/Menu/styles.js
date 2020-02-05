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
  background-image: url(${shape1});
  background-size: 230px;
  background-repeat: no-repeat;
  background-position: 165% 61%;
  transform: ${({ active }) =>
    active ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.2s ease-in-out;
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
`;
