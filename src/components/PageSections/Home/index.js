import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';

import About from '../../../pages/About';
import Properties from '../../../pages/Properties/Properties';
import Property from '../../../pages/Properties/Property';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <Properties/>
      <Property/>
      <About/>
    </Fragment>
  );
};

export default HomeComponent;
