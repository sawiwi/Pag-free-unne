import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CarouselSection from '../PageSections/Home/components/CarouselSection';
import Properties from '../../pages/Properties/Properties';
import About from '../../pages/About';
import MeetingForm from '../Form/MeetingForm';
// import Fab from '../SocialMediaFloating/Fab';

const Layout = () => {
  return (
    <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-white">
      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      <CarouselSection/> 
      <Properties/>
      <About/>
      <MeetingForm title="Contacto corredor" subtitle="Enviar mensaje"/>

      {/* FOOTER PAGE */}
      <Footer />
      
    </div>
  );
};

export default Layout;
