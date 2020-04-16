import React from 'react';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import H1 from '../../components/atoms/H1/H1';
import { StyledSectionTemplate, StyledWrapper, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper } from './styles';

const HeroSection = ({ greyBackground }) => {
  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <StyledWrapper>
        <StyledTextWrapper>
          <H1 data-aos="fade-up">SolFran Energy</H1>
          <p data-aos="fade-up" data-aos-delay="50">
            SolFran Energy współpracuje z kompleksowymi rozwiązaniami w zakresie odnawialnych źródeł energii, w których bierzemy odpowiedzialność za
            całą instalację - od planowania do ukończonej instalacji. Aby wszystko było idealnie dostosowane do każdego klienta, zawsze zaczynamy od
            bezpłatnej wizyty domow ej , w której sprawdzamy warunki dotyczące konkretnej nieruchomości i oczekiwań klienta.
          </p>

          <StyledButtonsWrapper data-aos="fade-up" data-aos-delay="100">
            <Button as="a" href="#offer">
              Oferta
            </Button>
            <Button primary as="a" href="#valuation">
              Wycena
            </Button>
          </StyledButtonsWrapper>
        </StyledTextWrapper>
        <StyledImageWrapper data-aos="zoom-in" data-aos-duration="500">
          <HouseImage />
        </StyledImageWrapper>
      </StyledWrapper>
    </StyledSectionTemplate>
  );
};

export default HeroSection;
