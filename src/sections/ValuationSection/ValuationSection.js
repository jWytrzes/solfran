import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import { StyledWrapper, StyledParagraph } from './styles';

const ValuationSection = () => {
  const [valuationContent, setValuationContent] = useState({ content: '' });
  const homepageValuationCollection = firestore.collection('homepageValuation');

  useEffect(() => {
    homepageValuationCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setValuationContent(data[0]);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionTemplate id="valuation" autoHeight>
      <Heading big data-aos="fade-up">
        Darmowa wycena
      </Heading>
      <StyledWrapper>
        <StyledParagraph data-aos="fade-up" dangerouslySetInnerHTML={{ __html: valuationContent.content }} />
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default ValuationSection;
