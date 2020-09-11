import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../sections/HeroSection/HeroSection';
import OfferSection from '../sections/OfferSection/OfferSection';
import ValuationSection from '../sections/ValuationSection/ValuationSection';
import TopBar from '../components/organisms/TopBar/TopBar';

const Home = () => {
  return (
    <>
      <Helmet>
        <title> SolFran Energy </title>
        <meta property="og:url" content={`https://www.solfranenergy.pl/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SolFran Energy" />
        <meta
          property="og:description"
          content="SolFran Energy - firma rodzinna, założona przez pasjonatów odnawialnych źródeł energii. Pełny profezjonalizm i oddanie. Jesteśmy firmą regionalną. Do każdego klienta podchodzimy indywidualnie."
        />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <TopBar data-aos="fade-right" data-aos-delay="300" />
      <HeroSection />
      <OfferSection greyBackground />
      <ValuationSection />
    </>
  );
};

export default Home;
