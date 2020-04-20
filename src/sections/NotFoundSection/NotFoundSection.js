import React from 'react';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import H1 from '../../components/atoms/H1/H1';
import { StyledSectionTemplate, StyledWrapper, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper, StyledH2 } from './styles';
import TopBar from '../../components/organisms/TopBar/TopBar';

const NotFoundSection = ({ greyBackground }) => {
  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <TopBar />
      <StyledWrapper>
        <StyledTextWrapper>
          <H1> 404 </H1>
          <StyledH2> Strona nie istnieje :( </StyledH2>
          <StyledButtonsWrapper>
            <Button as="a" href="/" primary autoWidth aria-label="Przejdź do strony głównej">
              Strona główna
            </Button>
          </StyledButtonsWrapper>
        </StyledTextWrapper>
        <StyledImageWrapper>
          <HouseImage />
        </StyledImageWrapper>
      </StyledWrapper>
    </StyledSectionTemplate>
  );
};

export default NotFoundSection;
