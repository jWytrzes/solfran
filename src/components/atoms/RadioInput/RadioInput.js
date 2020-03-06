import React from 'react';
import {
  StyledContainer,
  StyledWrapper,
  StyledInput,
  StyledFakeButton,
} from './styles';

const RadioInput = ({ id, value, name, checked, onChange, ...props }) => {
  return (
    <StyledContainer className="radioContainer" {...props}>
      <StyledWrapper htmlFor={id} tabIndex="0">
        <StyledInput
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {value}
        <StyledFakeButton htmlFor={id}> </StyledFakeButton>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default RadioInput;
