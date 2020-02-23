import React from 'react';
import { StyledButton, StyledIcon } from './styles';
import { ArrowRight } from 'react-feather';

const TextButton = () => {
  return (
    <StyledButton>
      Więcej
      <StyledIcon>
        <ArrowRight />
      </StyledIcon>
    </StyledButton>
  );
};

export default TextButton;
