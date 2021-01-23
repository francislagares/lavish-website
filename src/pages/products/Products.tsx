import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjFour } from './Data';

const Products = (): JSX.Element => {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Products;
