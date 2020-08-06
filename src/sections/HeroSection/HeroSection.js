import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import H1 from '../../components/atoms/H1/H1';
import { StyledSectionTemplate, StyledWrapper, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper } from './styles';
import { HashLink } from 'react-router-hash-link';

const HeroSection = ({ greyBackground }) => {
  const [heroContent, setHeroContent] = useState(null);
  const homepageContentCollection = firestore.collection('homepageContent');

  useEffect(() => {
    homepageContentCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const section1 = data.find((obj) => obj.sectionId === 'section1');
        setHeroContent(section1);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <StyledWrapper>
        <StyledTextWrapper>
          {heroContent && (
            <>
              <H1 data-aos="fade-up">{heroContent.sectionTitle}</H1>
              <div data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: heroContent.content[0].text }} />
            </>
          )}

          <StyledButtonsWrapper data-aos="fade-up" data-aos-delay="100">
            <Button as={HashLink} smooth to="#offer">
              Oferta
            </Button>
            <Button primary as={HashLink} smooth to="#valuation">
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
