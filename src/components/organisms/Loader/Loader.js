import React from 'react';
import { StyledWrapper } from './styles';
import { Loader as LoaderIcon } from 'react-feather';

const Loader = ({ ...props }) => {
  return (
    <StyledWrapper {...props}>
      <LoaderIcon />
    </StyledWrapper>
  );
};

export default Loader;
