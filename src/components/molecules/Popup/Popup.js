import React from 'react';
import { StyledWrapper, StyledButton, Layer, H3, P } from './styles';
import { X } from 'react-feather';

const Popup = ({ title, content, closePopup }) => {
  return (
    <>
      <StyledWrapper>
        <StyledButton onClick={closePopup}>
          <X color="#18516C" />
        </StyledButton>
        <div>
          <H3> {title} </H3>
          <P> {content} </P>
        </div>
      </StyledWrapper>
      <Layer onClick={closePopup} />
    </>
  );
};

export default Popup;
