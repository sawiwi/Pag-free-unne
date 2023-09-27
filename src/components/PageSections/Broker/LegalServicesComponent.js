import React, { Fragment, useContext, useEffect } from 'react';
import HeroBanner from '../../Carousel/HeroBanner';
import { ClientsContext } from '../../../context/clients/ClientsContext';
import WhyServicesUnne from './components/WhyServicesUnne';
import ProcessTrading from './components/ProcessTrading';
import { Fade } from 'react-awesome-reveal';
import { TradingProcessData } from '../../../data';
import MoreServices from './components/MoreServices';
import ReactSlickComponent from '../../Carousel/ReactSlickComponent';
import ClientCard from '../../Card/ClientCard';
import { mainCarouselLegalServicesData } from '../../../data';

const LegalServicesComponent = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, setClients, getClientList, UserExperience, UserExperServicesLegal] = contextData;


  console.log(UserExperServicesLegal)

  useEffect(() => {
    getClientList();
  }, []);

  return (
    <Fragment>
      <HeroBanner data={mainCarouselLegalServicesData} />
      <WhyServicesUnne />
      <Fade>
        {TradingProcessData?.length > 0 &&
          TradingProcessData?.map((e, idx) => (
            <ProcessTrading key={idx + 1} data={e} />
          ))}
      </Fade>
      <MoreServices />
      <section className="relative mb-24 xl:mb-40 px-4 xl:px-56">
        <Fade delay={200} cascade>
          <ReactSlickComponent
            RenderComponent={ClientCard}
            data={UserExperServicesLegal}
            slidesToShow={3}
            xl={1}
          />
        </Fade>
      </section>
    </Fragment>
  );
};

export default LegalServicesComponent;
