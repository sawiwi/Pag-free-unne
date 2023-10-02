import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';

import About from '../../../pages/About';
import Properties from '../../../pages/Properties/Properties';
import Property from '../../../pages/Properties/Property';
import MeetingForm from '../../../components/Form/MeetingForm';
import {Container,Row, Col} from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <Fragment>
      
      <CarouselSection />
      <Properties/>
      {/* <Property/> */}
      <About/>     
    </Fragment>
  );
};

export default HomeComponent;
