import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: ${({ noBottomPadding }) => (noBottomPadding ? '50px 25px 0' : '50px 25px')};
  padding-top: ${({ topPadding }) => (topPadding ? '66px' : '50px')};
  background-color: ${({ theme, greyBackground }) => (greyBackground ? theme.grey : 'transparent')};
  min-height: ${({ autoHeight }) => (autoHeight ? 'auto' : '100vh')};
  display: flex;
  flex-direction: column;

  @media (min-width: 1150px) {
    padding: 50px 12.5%;
    scroll-margin-top: 70px;
  }

  &#valuation a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    box-shadow: inset 0 -7px 0 rgba(141, 131, 254, 0.2);
  }
`;

const SectionTemplate = ({ children, noBottomPadding, greyBackground, topPadding, id, autoHeight, ...props }) => {
  return (
    <StyledSection
      id={id}
      noBottomPadding={noBottomPadding}
      greyBackground={greyBackground}
      topPadding={topPadding}
      className="section"
      autoHeight={autoHeight}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default SectionTemplate;
