import React from 'react';
import HeroSection from '../sections/HeroSection/HeroSection';
import OfferSection from '../sections/OfferSection/OfferSection';
import ValuationSection from '../sections/ValuationSection/ValuationSection';
import TopBar from '../components/organisms/TopBar/TopBar';

const Home = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <OfferSection greyBackground />
      <ValuationSection />
    </>
  );
};

export default Home;
