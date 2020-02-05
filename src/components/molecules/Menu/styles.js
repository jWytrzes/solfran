import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  background: pink;
  top: 100%;
  left: -5px;
  width: calc(100% + 5px);
  height: calc(100vh - 66px);
  padding: 25px;
  align-items: center;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 57%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
