import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  @media (min-width: 1150px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 18px;
    padding: 23px 0;
  }
`;

export const StyledLi = styled.li`
  margin-left: 20px;
  position: relative;
  transition: transform 0.15s ease-in;

  @media (min-width: 1150px) {
    margin-left: 0;
    margin-bottom: 10px;
  }

  :hover {
    transform: scale(1.15);
  }
`;
