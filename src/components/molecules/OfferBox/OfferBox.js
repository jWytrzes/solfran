import React from 'react';
import TextButton from '../../atoms/TextButton/TextButton';
import { StyledWrapper, StyledHeader, StyledParagraph } from './styles';

const OfferBox = ({ title, content, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledHeader> {title} </StyledHeader>
      <StyledParagraph> {content} </StyledParagraph>
      <TextButton />
    </StyledWrapper>
  );
};

export default OfferBox;
