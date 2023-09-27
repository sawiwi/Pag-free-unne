import BasicCard from '../../../Card/BasicCard';
import InvestToday from '../../../Card/InvestToday';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

/* Data */
import { NewPropertyQualities } from '../../../../data/index';

const NewProperty = () => {
  const titleFont = 'text-4xl lg:text-5xl';
  const subFont = 'text-base';
  const subTitleFont = '';

  /* ToastMessage : Success */
  const showToastWarningMsg = () => {
    toast.warn('No se encuentran propiedades para invertir de momento.', {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className="">
      <div className="text-center pb-10">
        <h2 className={`${titleFont} font-bold text-gray-800`}>
          Es momento de invertir en tu nueva propiedad
        </h2>
        <p className={`${subFont} pt-2 font-medium text-gray-600`}>
          Invierte en Propiedades nuevas en blanco, en verde o de entrega
          inmediata, para que tu activo pueda generar ganancias luego de
          arrendarla y con el tiempo plusvalía
        </p>
      </div>
      <div className="grid 2xl:px-48 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mr-4 ml-4">
        {/* Section map*/}
        {NewPropertyQualities.length > 0
          ? NewPropertyQualities.map((e) => (
              <BasicCard key={e.id} backgroundColor="bg-[#FEF9EA]" data={e} />
            ))
          : null}
      </div>
      <div
        className="divider my-10 font-bold text-2xl justify-center
                  before:content-[none] md:before:content-[''] md:before:mx-6 lg:before:mx-12 xl:before:ml-24 before:bg-gray-200 
                  after:content-[none] md:after:content-[''] md:after:mx-6 lg:after:mx-12 xl:after:mr-24 after:bg-gray-200"
      >
        <div className="mx-4">
          <h3 className={`${subTitleFont} text-xl md:text-2xl text-gray-800`}>
            {''}
            Elige en qué quieres invertir hoy
          </h3>
        </div>
      </div>

      <div className="flex gap-12 justify-center flex-wrap">
        <InvestToday
          title="Departamento"
          href="#departamento"
          operationType="venta"
          typeOfProperty="departamento"
          img = "bg-img-departamento"
          onClick={showToastWarningMsg}
        />
        <InvestToday
          title="Estacionamiento"
          href="#estacionamientos"
          operationType="venta"
          typeOfProperty="estacionamiento"
          img = "bg-img-estacionamiento"
          onClick={showToastWarningMsg}
        />
        <InvestToday
          title="Bodega"
          href="#bodega"
          operationType="venta"
          typeOfProperty="bodega"
          img = "bg-img-bodega"
          onClick={showToastWarningMsg}
        />
        <ToastContainer/>
      </div>
    </div>
  );
};

export default NewProperty;
