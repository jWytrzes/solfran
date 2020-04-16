import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import ValuationForm from '../../components/organisms/ValuationForm/ValuationForm';
import { StyledWrapper, StyledParagraph } from './styles';

const ValuationSection = () => {
  return (
    <SectionTemplate id="valuation">
      <Heading big data-aos="fade-up">
        Darmowa wycena
      </Heading>
      <StyledWrapper>
        <StyledParagraph data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facere odit odio, in dolor id sint enim ratione perferendis quae voluptas
          consequuntur. Ipsum quos laborum aliquid corporis, magni doloribus alias.
        </StyledParagraph>
        <ValuationForm />
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default ValuationSection;
