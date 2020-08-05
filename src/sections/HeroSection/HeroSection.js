import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { firestore } from '../../base';
import Button from '../../components/atoms/Button/Button';
import HouseImage from '../../components/atoms/HouseImage/HouseImage';
import H1 from '../../components/atoms/H1/H1';
import { StyledSectionTemplate, StyledWrapper, StyledButtonsWrapper, StyledImageWrapper, StyledTextWrapper } from './styles';
import { HashLink } from 'react-router-hash-link';

const HeroSection = ({ greyBackground }) => {
  const [heroContent, setHeroContent] = useState({ title: '', content: '' });
  const homepageHeroCollection = firestore.collection('homepageHero');

  useEffect(() => {
    homepageHeroCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setHeroContent({ ...data[0] });
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
  }, []);

  return (
    <StyledSectionTemplate id="hero" noBottomPadding topPadding greyBackground={greyBackground} className="section">
      <StyledWrapper>
        <StyledTextWrapper>
          <H1 data-aos="fade-up">{heroContent.title}</H1>
          <div data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: heroContent.content }} />

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
