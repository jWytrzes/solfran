import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import H1 from '../../components/atoms/H1/H1';
import { StyledSectionTemplate, StyledWrapper, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper } from './styles';

const HeroSection = ({ greyBackground }) => {
  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <StyledWrapper>
        <StyledTextWrapper>
          <H1> SolFran Energy </H1>
          <p>
            SolFran Energy współpracuje z kompleksowymi rozwiązaniami w zakresie odnawialnych źródeł energii, w których bierzemy odpowiedzialność za
            całą instalację - od planowania do ukończonej instalacji. Aby wszystko było idealnie dostosowane do każdego klienta, zawsze zaczynamy od
            bezpłatnej wizyty domow ej , w której sprawdzamy warunki dotyczące konkretnej nieruchomości i oczekiwań klienta.
          </p>
          <StyledButtonsWrapper>
            <Button as={HashLink} smooth to="/#offer" aria-label="Przejdź do sekcji Oferta">
              Oferta
            </Button>
            <Button primary="true" as={HashLink} smooth to="/#valuation" aria-label="Przejdź do sekcji Wycena">
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
