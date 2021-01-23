import React from 'react';
import HeroSection from './HeroSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import Pricing from 'src/components/pricing/Pricing';

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default HomePage;
