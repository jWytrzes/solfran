import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import { StyledWrapper, StyledParagraph } from './styles';

const ValuationSection = () => {
  const [valuationContent, setValuationContent] = useState({ sectionTitle: '', content: [{ title: '', text: '' }] });
  const homepageContentCollection = firestore.collection('homepageContent');

  useEffect(() => {
    homepageContentCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const section3 = data.find((obj) => obj.sectionId === 'section3');
        setValuationContent(section3);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionTemplate id="valuation" autoHeight>
      <Heading big data-aos="fade-up">
        {valuationContent.sectionTitle}
      </Heading>
      <StyledWrapper>
        <StyledParagraph data-aos="fade-up" dangerouslySetInnerHTML={{ __html: valuationContent.content[0].text }} />
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default ValuationSection;
