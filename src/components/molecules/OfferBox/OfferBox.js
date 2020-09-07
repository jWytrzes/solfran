import React from 'react';
import parse from 'html-react-parser';
import TextButton from '../../atoms/TextButton/TextButton';
import Heading from '../../atoms/Heading/Heading';
import { StyledWrapper } from './styles';

const OfferBox = ({ title, content, ...props }) => {
  const html = parse(content);
  return (
    <StyledWrapper {...props}>
      <Heading> {title} </Heading>
      <div>{html}</div>
      <TextButton />
    </StyledWrapper>
  );
};

export default OfferBox;
