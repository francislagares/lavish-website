import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne } from './Data';
import Pricing from 'src/components/pricing/Pricing';

const Services = (): JSX.Element => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Services;
