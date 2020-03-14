import React from 'react';
import TextButton from '../../atoms/TextButton/TextButton';
import { StyledWrapper, StyledParagraph } from './styles';
import Heading from '../../atoms/Heading/Heading';

const OfferBox = ({ title, content, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <Heading> {title} </Heading>
      <StyledParagraph> {content} </StyledParagraph>
      <TextButton />
    </StyledWrapper>
  );
};

export default OfferBox;
