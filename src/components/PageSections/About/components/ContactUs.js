import React from 'react';
import Contact from '../../../Form/Contact';
import styles from '../../../../styles/components/ContactUsStyles/Social.module.css';
import { iconsList } from '../../../Icons';
import ContainerSimple from './ContainerSimple';
// import { Fade } from 'react-awesome-reveal';
import MapHome from '../../../Maps/MapHome';
import Section from '../../../Section/Section';

const ContactUs = () => {
  const { BsFacebook, BsInstagram, BsYoutube } = iconsList;

  return (
    // <Fade delay={300} direction="left">
    <Section className="2xl:mx-48 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 my-14 md:my-40 xl:my-64">
        <div className="flex flex-col">
          <Contact />
        </div>

        <div className="flex flex-col">
          <div className="w-full h-96 pt-8 pl-12 pr-12">
            <MapHome />
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
            <div className="bg-white  rounded-md overflow-hidden">
              <div className="p-4">
                <ContainerSimple
                  title="Horario de atención:"
                  desc="De Lunes a Viernes 08:30 am a 18:00hrs."
                />
                <ContainerSimple
                  title="Dirección:"
                  desc="Asturias 171, Of. 101, Las Condes, Santiago."
                />
                <ContainerSimple title="Teléfono" desc="+56 264653732" />
                <ContainerSimple title="WhatsApp" desc="+56 932924867" />
                <ContainerSimple title="Correo" desc="contacto@unne.cl" />

                <div className={`${styles.card} rounded-lg`}>
                  <span className={`${styles.span}`}>Redes</span>

                  <a href="https://www.facebook.com/unnechile?mibextid=ZbWKwL/" target='_blank' className={`${styles.social} hover:animate-bounce2`}>
                    <BsFacebook color="#0F8EF2 " />
                  </a>

                  <a
                    href="https://www.instagram.com/unne.cl/?hl=es"
                    target="_blank"
                    className={`${styles.social} hover:animate-bounce2`}
                    rel="noreferrer"
                  >
                    <BsInstagram color="#FB00AD" />
                  </a>

                  <a href="https://www.linkedin.com/company/unnecl/" target="_blank" className={`${styles.social} hover:animate-bounce2 `}>
                    {/* <BsYoutube color="#ff0000" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" className="fill-blue-500" viewBox="0 5 1036 990">
                      <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    // </Fade>
  );
};
export default ContactUs;
