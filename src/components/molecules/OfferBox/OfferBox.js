import React from 'react';
import TextButton from '../../atoms/TextButton/TextButton';
import { StyledWrapper } from './styles';
import Heading from '../../atoms/Heading/Heading';

const OfferBox = ({ title, content, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <Heading> {title} </Heading>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <TextButton />
    </StyledWrapper>
  );
};

export default OfferBox;
