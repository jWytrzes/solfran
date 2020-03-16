import React from 'react';
import HeroSection from '../sections/HeroSection/HeroSection';
import OfferSection from '../sections/OfferSection/OfferSection';
import ValuationSection from '../sections/ValuationSection/ValuationSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OfferSection greyBackground />
      <ValuationSection />
    </>
  );
};

export default Home;
