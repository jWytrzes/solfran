import React from 'react';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import { StyledSectionTemplate, StyledWrapper, StyledH1, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper } from './styles';

const HeroSection = ({ greyBackground }) => {
  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <StyledWrapper>
        <StyledTextWrapper>
          <StyledH1> SolFran Energy </StyledH1>
          <p>
            SolFran Energy współpracuje z kompleksowymi rozwiązaniami w zakresie odnawialnych źródeł energii, w których bierzemy odpowiedzialność za
            całą instalację - od planowania do ukończonej instalacji. Aby wszystko było idealnie dostosowane do każdego klienta, zawsze zaczynamy od
            bezpłatnej wizyty domow ej , w której sprawdzamy warunki dotyczące konkretnej nieruchomości i oczekiwań klienta.
          </p>
          <StyledButtonsWrapper>
            <Button as="a" href="#offer">
              Oferta
            </Button>
            <Button primary as="a" href="#valuation">
              Wycena
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

export default HeroSection;
