import React from 'react';
import TopBar from '../components/organisms/TopBar/TopBar';
import HeroSection from '../sections/HeroSection/HeroSection';
import OfferSection from '../sections/OfferSection/OfferSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OfferSection greyBackground />
    </>
  );
};

export default Home;
