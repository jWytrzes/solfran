import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, primary, ...props }) => {
  return (
    <StyledButton primary={primary ? 1 : 0} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
