import React from 'react';
import MeetingForm from '../../../../components/Form/MeetingForm';

const banner = () => {
  /*   const DataEmailJS = [
          {
              ServiceID: "service_j0tf7sp",
              TemplateID: "template_nm2o4an",
              PublicKEY: "ZWanVNmLr-iX_Op5K",
          },
      ]; */

  const titleFont = 'text-3xl';
  const subTitleFont = '';

  return (
    <div id="meeting-section" className="flex justify-center py-5 mr-4 ml-4">
      <div className="collapse trasition duration-300 ease-in-out">
        <input type="checkbox" className="peer" />
        <div className="collapse-title px-0 py-0 w-full bg-[#FEF4DE] max-w-4xl overflow-hidden flex flex-col sm:flex-row">
          <div className="bg-[url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690837882/Projects/unne/img/Unidade%20Nuevas/UNIDADES_NUEVAS__TE_AYUDAMOS_CON_EL_FINANCIAMIENTO_PARA_TU_CREDITO_HIP_gkzswv.webp')] max-w-xs w-96 h-full bg-cover"></div>
          <div className="flex flex-col items-center px-5 pt-6 pb-4 text-center max-w-xl">
            <h3 className={` ${titleFont} font-bold text-gray-800`}>
              Te ayudamos con el financiamiento para tu crédito Hipotecario
            </h3>
            <p
              className={`${subTitleFont} font-semibold max-w-sm text-gray-600`}
            >
              Déjanos tus datos y trabajaremos juntos para encontrar la mejor
              alternativa para ti
            </p>
            <button className="peer bg-primary w-max mt-5 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-primary-300 hover:shadow-xl trasition duration-300 ease-in-out">
              Agenda un reunión
            </button>
          </div>
        </div>
        <div className="collapse-content pt-4">
          {/*  {DataEmailJS?.length > 0 && DataEmailJS?.map((e) => (<MeetingForm key={e.ServiceID} title="¿Quieres agendar una reunión con nosotros?" subtitle="Un equipo de expertos se pondra en contacto contigo" DataEmail={e} />))} */}
          <MeetingForm
            title="¿Quieres agendar una reunión con nosotros?"
            subtitle="Un equipo de expertos se pondrá en contacto contigo"
            message="Servicios: inversionista Unidades nuevas"
          />
        </div>
      </div>
    </div>
  );
};

export default banner;
