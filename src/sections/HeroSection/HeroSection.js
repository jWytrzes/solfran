import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Button from '../../components/atoms/Button/Button';
import {
  StyledWrapper,
  StyledH1,
  StyledButtonsWrapper,
  StyledImageWrapper,
} from './styles';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';

const HeroSection = ({ greyBackground }) => {
  return (
    <SectionTemplate noBottomPadding topPadding greyBackground={greyBackground}>
      <StyledWrapper>
        <div style={{ margin: 'auto 0' }}>
          <StyledH1> SolFran Energy </StyledH1>
          <p>
            SolFran Energy współpracuje z kompleksowymi rozwiązaniami w zakresie
            odnawialnych źródeł energii, w których bierzemy odpowiedzialność za
            całą instalację - od planowania do ukończonej instalacji. Aby
            wszystko było idealnie dostosowane do każdego klienta, zawsze
            zaczynamy od bezpłatnej wizyty domow ej , w której sprawdzamy
            warunki dotyczące konkretnej nieruchomości i oczekiwań klienta.
          </p>
          <StyledButtonsWrapper>
            <Button as="a" href="#offer">
              Oferta
            </Button>
            <Button primary as="a" href="#valuation">
              Wycena
            </Button>
          </StyledButtonsWrapper>
        </div>
        <StyledImageWrapper>
          <HouseImage />
        </StyledImageWrapper>
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default HeroSection;
