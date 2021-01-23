import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjThree } from './Data';

const SignUp = (): JSX.Element => {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default SignUp;
