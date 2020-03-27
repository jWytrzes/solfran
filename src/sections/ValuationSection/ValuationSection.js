import React, { useState, useEffect } from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import { StyledWrapper, StyledParagraph, StyledIframe } from './styles';

const ValuationSection = () => {
  const [isDesktop, toggleIsDesktop] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1150) toggleIsDesktop(true);
  }, []);

  return (
    <SectionTemplate id="valuation">
      <Heading big> Darmowa wycena </Heading>
      <StyledWrapper>
        <StyledParagraph>
          Zapraszamy do wypełnienia formularza. Po wysłaniu odpowiedzi, skontaktujemy się z Państwem w celu przedstawienia wstępnej wyceny instalacji.
        </StyledParagraph>

        <StyledIframe
          id="questionnaire"
          title="Ankieta do darmowej wyceny"
          width="100%"
          height={isDesktop ? 600 : 400}
          src="https://www.interankiety.pl/i/KaJgKLo6?fbclid=IwAR2wpxjxvAfOC45s4yDrM5e6j2tx90jmuy07Userg8yXvR7QUlDV_BXoTeE"
        ></StyledIframe>
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default ValuationSection;
