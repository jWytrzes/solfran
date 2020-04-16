import React from 'react';
import { StyledWrapper, StyledLoader } from './styles';
import { Loader as LoaderIcon } from 'react-feather';

const Loader = () => {
  return (
    <StyledWrapper>
      <LoaderIcon />
    </StyledWrapper>
  );
};

export default Loader;
