import React from 'react';
import { StyledWrapper } from './styles';

const FormGroup = ({ required, children }) => {
  return <StyledWrapper required={required}>{children}</StyledWrapper>;
};

export default FormGroup;
