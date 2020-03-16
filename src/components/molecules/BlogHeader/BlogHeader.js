import React from 'react';
import H1 from '../../atoms/H1/H1';
import { StyledWrapper } from './styles';

const BlogHeader = ({ children, dark, alignLeft }) => {
  return (
    <StyledWrapper dark={dark} alignLeft={alignLeft}>
      <H1> {children} </H1>
    </StyledWrapper>
  );
};

export default BlogHeader;
