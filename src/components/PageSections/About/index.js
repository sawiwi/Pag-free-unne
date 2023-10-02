import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-24">
        <h2 className="text-2xl xl:text-5xl text-center  text-primary font-bold">
          Sobre mí
        </h2>
        <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
          Creamos Unne con la misión de poder arrendar, vender e invertir en propiedades de manera informada, segura y rápida. 
          <br />
          <br />
          Nuestro propósito es aportar a la democratización y profesionalización de nuestra industria por la vía de la innovación en tecnología, capacitaciones, alianzas y trabajo colaborativo.  
          <br />
          <br />
          Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
          <br />
          <br />
        </p>

        <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
          Pablo Ramirez P.
        </p>
        <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
          Fundador y Gerente General.
        </p>
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>
      {/* <div className="flex items-center justify-center flex-col">
        <img
          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
          alt="about-img"
          className="rounded-full h-[50px] w-[150px] xl:w-[400px] xl:h-[400px]"
        />
{/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> 
      </div> */}
    </div>
    {/* </Fade> */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
