import React from 'react';
import { StyledButton, StyledIcon } from './styles';
import rightArrowIcon from '../../../assets/pictures/arrow-right.svg';

const TextButton = () => {
  return (
    <StyledButton>
      Więcej
      <StyledIcon>
        <img src={rightArrowIcon} alt="arrow icon" />
      </StyledIcon>
    </StyledButton>
  );
};

export default TextButton;
