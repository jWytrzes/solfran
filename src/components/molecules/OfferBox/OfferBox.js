import React from 'react';
import TextButton from '../../atoms/TextButton/TextButton';
import Heading from '../../atoms/Heading/Heading';
import { StyledWrapper } from './styles';

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
