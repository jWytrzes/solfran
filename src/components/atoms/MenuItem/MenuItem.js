import React from 'react';
import { StyledLi } from './styles';

const MenuItem = ({ icon, children }) => {
  return (
    <StyledLi>
      <span>{icon}</span>
      <span> {children} </span>
    </StyledLi>
  );
};

export default MenuItem;
