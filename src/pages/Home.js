import React from 'react';
import HeroSection from '../sections/HeroSection/HeroSection';
import OfferSection from '../sections/OfferSection/OfferSection';
import ValuationSection from '../sections/ValuationSection/ValuationSection';
import ContactSection from '../sections/ContactSection/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OfferSection greyBackground />
      <ValuationSection />
      <ContactSection />
    </>
  );
};

export default Home;
