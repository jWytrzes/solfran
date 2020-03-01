import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import ValuationForm from '../../components/organisms/ValuationForm/ValuationForm';

const ValuationSection = () => {
  return (
    <SectionTemplate>
      <Heading big> Darmowa wycena </Heading>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facere
        odit odio, in dolor id sint enim ratione perferendis quae voluptas
        consequuntur. Ipsum quos laborum aliquid corporis, magni doloribus
        alias.
      </Paragraph>
      <ValuationForm />
    </SectionTemplate>
  );
};

export default ValuationSection;
