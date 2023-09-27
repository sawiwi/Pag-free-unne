import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import HeroBanner from '../../components/Carousel/HeroBanner';
import WhyUnneSection from '../../components/PageSections/Owner/ToLease/whyUnneSection';
import WhyUnneInfo from '../../components/PageSections/Owner/ToLease/WhyUnneInfo';
import CircleSection from '../../components/PageSections/Owner/ToLease/CircleSection';
import StepsToLease from '../../components/PageSections/Owner/ToLease/StepsToLease';
import { Fade } from 'react-awesome-reveal';

/* Data */
import {
  CircleVenderData,
  whyUnneSellData,
  whyUnneSellNewData,
  mainCarouselSellingData,
} from '../../data/index';

const ToSell = () => {
  const margin = 'my-20';

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-propietario/quiero-vender') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Quiero vender" />
      <section>
        <HeroBanner data={mainCarouselSellingData} />
      </section>
      <section className={`${margin}`}>
        <Fade delay={300} cascade>
          {/* {whyUnneSellData?.length > 0 &&
            whyUnneSellData?.map((e) => <WhyUnneSection key={e.id} data={e} />)} */}
            <WhyUnneInfo data={whyUnneSellNewData} title='¿Por qué Vender con Unne?'/>
        </Fade>
      </section>
      <section className={`${margin} bg-gray-50 py-8`}>
        <Fade delay={300} cascade>
          <CircleSection
            ubicationData={CircleVenderData}
            ColorBorder="border-[#FBB916]"
            ColorBg="bg-[#FBB916]"
            ColorNumberBG="bg-primary-400"
            ColorTextBG="bg-primary"
            ColorText="text-black"
            titleButton='¿Quieres vender tu propiedad?'
          />
        </Fade>
      </section>
      <section className="my-20 xl:my-64 px-4 xl:px-32" id='formulario'>
        <StepsToLease />
      </section>
    </Fragment>
  );
};

export default ToSell;
