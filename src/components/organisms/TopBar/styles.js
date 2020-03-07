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

  @media (min-width: 1150px) {
    width: 100px;
    height: 100vh;
    flex-direction: column;
    background-color: white;
    padding: 40px 15px;
    box-shadow: 5px 0 20px rgba(51, 51, 51, 0.14);
  }
`;

export const StyledLogo = styled.img`
  width: 70px;
`;
