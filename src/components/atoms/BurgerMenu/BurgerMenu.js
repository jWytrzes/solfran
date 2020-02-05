import React from 'react';
import { StyledButton, StyledBox, StyledInner } from './styles';

const BurgerMenu = ({active, ...props}) => {
  return (
    <StyledButton {...props}>
      <StyledBox>
        <StyledInner isActive={active} />
      </StyledBox>
    </StyledButton>
  );
};

export default BurgerMenu;
