import React from 'react';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive }) => {
  return (
    <StyledLi>
      <StyledIconWrapper isActive={isActive}>{icon}</StyledIconWrapper>
      <span> {children} </span>
    </StyledLi>
  );
};

export default MenuItem;
