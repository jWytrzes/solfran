import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.11);
  margin: 0 0 50px;
  z-index: 7;
  cursor: pointer;
  z-index: 99;
  display: flex;
  flex-direction: column;

  @media (min-width: 1150px) {
    margin: 0;
  }

  div {
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.s};
    height: calc(1.4rem * 5 * 1.45);
    overflow-y: hidden;
    position: relative;
    margin-top: auto;

    p:first-of-type {
      margin-top: 0;
    }
  }
`;
