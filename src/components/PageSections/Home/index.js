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
      <Container>
      <Row>
        <Col sm={7}>
           <About/>
   
        </Col>
        <Col sm={5}>
        <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          /></Col>

      </Row>
      </Container>
    </Fragment>
  );
};

export default HomeComponent;
