import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: ${({ noBottomPadding }) =>
    noBottomPadding ? '50px 25px 0' : '50px 25px'};
  padding-top: ${({ topPadding }) => (topPadding ? '66px' : '50px')};
  background-color: ${({ theme, greyBackground }) =>
    greyBackground ? theme.grey : 'transparent'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionTemplate = ({
  children,
  noBottomPadding,
  greyBackground,
  topPadding,
  id,
  ...props
}) => {
  return (
    <StyledSection
      id={id}
      noBottomPadding={noBottomPadding}
      greyBackground={greyBackground}
      topPadding={topPadding}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default SectionTemplate;
