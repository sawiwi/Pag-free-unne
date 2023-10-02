import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CarouselSection from '../PageSections/Home/components/CarouselSection';
import Properties from '../../pages/Properties/Properties';
import About from '../../pages/About';
import MeetingForm from '../Form/MeetingForm';
// import Fab from '../SocialMediaFloating/Fab';
import Head from '../../components/Head/Head';

const Layout = () => {
  return (
    <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-white">
      <Head
        title="Inicio"
        description="Unne es una plataforma de corretaje, donde los corredores puedan acceder a herramientas digitales que de otro modo seria difícil de acceder"
        keywords="unne, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />

      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      <CarouselSection/> 
      <Properties/>
      <About/>

      {/* FOOTER PAGE */}
      <Footer />
      
    </div>
  );
};

export default Layout;
