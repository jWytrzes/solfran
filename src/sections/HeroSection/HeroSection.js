import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';

const HeroSection = ({ greyBackground }) => {
  return (
    <SectionTemplate noBottomPadding topPadding greyBackground={greyBackground}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem
      natus? Incidunt quidem vitae impedit eveniet quibusdam itaque non
      consectetur. Ab dolores illo assumenda sapiente excepturi adipisci quae
      harum temporibus!
    </SectionTemplate>
  );
};

export default HeroSection;
