import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';

import About from '../../../pages/About';
import Properties from '../../../pages/Properties/Properties';
import Property from '../../../pages/Properties/Property';
import MeetingForm from '../../../components/Form/MeetingForm';


const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <Properties/>
      {/* <Property/> */}
      <About/>
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
    </Fragment>
  );
};

export default HomeComponent;
