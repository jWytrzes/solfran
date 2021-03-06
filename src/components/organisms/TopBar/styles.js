import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: ${({ background }) => (background ? 'white' : 'transparent')};
  box-shadow: ${({ background }) => (background ? '0px 0 20px rgba(51, 51, 51, 0.14)' : 'none')};
  transition: background-color 0.4s ease-in-out;
  will-change: background-color;

  @media (min-width: 1150px) {
    width: ${({ vertical }) => (vertical ? '100px' : '100%')};
    height: ${({ vertical }) => (vertical ? '100vh' : '70px')};
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    background-color: white;
    padding: ${({ vertical }) => (vertical ? '40px 15px' : '15px 12.5%')};
    box-shadow: 5px 0 20px rgba(51, 51, 51, 0.14);
  }
`;

export const StyledLogo = styled.img`
  width: 70px;
  position: relative;
  z-index: 9999;
`;
