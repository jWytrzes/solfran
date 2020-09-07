import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  padding: 50px 25px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey};
  @media (min-width: 1150px) {
    padding: 50px 12.5%;
  }
`;

const LoginTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default LoginTemplate;
