import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import Slider from '../../components/organisms/Slider/Slider';

const OfferSection = ({ greyBackground }) => {
  return (
    <SectionTemplate greyBackground={greyBackground}>
      <Heading big> Oferta </Heading>
      <Slider />
    </SectionTemplate>
  );
};

export default OfferSection;
