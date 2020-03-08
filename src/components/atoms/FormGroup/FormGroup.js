import React from 'react';
import { StyledWrapper } from './styles';

const FormGroup = ({ required, children, ...props }) => {
  return (
    <StyledWrapper {...props} required={required}>
      {children}
    </StyledWrapper>
  );
};

export default FormGroup;
