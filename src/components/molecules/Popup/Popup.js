import React, { useState, useEffect } from 'react';
import { StyledWrapper, StyledButton, Layer, H3, P } from './styles';
import { X } from 'react-feather';

const Popup = ({ title, content, closePopup }) => {
  const [animate, setAnimate] = useState(true);

  const handleClose = () => {
    setAnimate(true);
    setTimeout(() => {
      closePopup();
    }, 200);
  };

  useEffect(() => {
    setAnimate(false);
  }, []);

  return (
    <>
      <StyledWrapper animate={animate}>
        <StyledButton onClick={handleClose}>
          <X color="#18516C" />
        </StyledButton>
        <div>
          <H3> {title} </H3>
          {typeof content === 'string' ? <P dangerouslySetInnerHTML={{ __html: content }} /> : <P> {content} </P>}
        </div>
      </StyledWrapper>
      <Layer onClick={handleClose} animate={animate} />
    </>
  );
};

export default Popup;
