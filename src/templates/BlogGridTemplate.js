import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  padding: 0 25px;
`;

const BlogGridTemplate = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default BlogGridTemplate;
