import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  padding: 0 25px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 50px 12.5%;
  }
`;

const BlogGridTemplate = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default BlogGridTemplate;
