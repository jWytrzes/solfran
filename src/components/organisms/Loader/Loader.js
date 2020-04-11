import React from 'react';
import { StyledWrapper, StyledLoader } from './styles';

const Loader = () => {
  return (
    <StyledWrapper>
      <StyledLoader className="lds-dual-ring"></StyledLoader>
    </StyledWrapper>
  );
};

export default Loader;
