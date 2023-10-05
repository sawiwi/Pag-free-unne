import React, { useEffect, useState , Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import ModalDetailProperty from './ModalDetailProperty';
// import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';

import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
  ufToClp,
  clpToUf2
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';
import { is } from '@babel/types';
import {Button, Modal, ModalBody} from 'reactstrap';

const PropertyCard = ({ data, isList, property,valueUf }) => {
  const [modalOpen, setModalOpen]= useState(false); 
  const { id, title, image, address, commune, city, price, types, surface_m2 , bedrooms, bathrooms, covered_parkings_lots} = data;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
    BiMap
  } = iconsList;

const openModal=()=>{
  setModalOpen(true)
}

console.log(modalOpen)

const closeModal=()=>{
  setModalOpen(false)
}

  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.');

    if (name === 'UF' && code === 'UF'){
      clpValue = ufToClp(price,valueIntUF);
    }
    if (name === 'Peso Chileno' && code === 'CLP'){
      ufValue = clpToUf2(price,valueIntUF);
    }

    return (
      <div className= {`${isList ? 'grid grid-cols-1' : ""}flex justify-between`}>
        <h1 className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-primary">
          <span className="mr-1">UF: </span>{' '}
          {parseToDecimal(ufValue)} 
        </h1>
        <p className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-black">
          <span className="mr-1">CLP: </span>{' '}
          {parseToCLPCurrency(clpValue)}
        </p>
      </div>
    )
  };

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 hover:shadow-lg md:flex-row h-299'
          : 'w-full '
      } border rounded-xl border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >
      <img
        className={`${
          isList
            ? 'h-[299px] w-[100%] md:w-[400px]  xl:w-[400px] object-cover rounded-t-xl xl:rounded-none'
            : 'rounded-t-xl'
        }  object-cover h-[299px] w-full`}
        src={`https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${id}//1.jpg`}
        alt={`top-img-${title}`}
        width="full"
        
      />

      <div className="p-3">
        <div className={`${isList ? 'grid grid-cols-2  xl:w-[50vw]': ""} flex flex-row justify-between`}>
          <small className="mb-3 font-normal text-sm text-gray-400 flex items-start justify-start">
            <BiMap className="text-xl mr-1" />
            {truncateString(
              `${address || 'Dirección no registrada'}, ${
                commune || 'Comuna no registrada'
              }`,
              60
            )}
          </small>
          <small className="uppercase text-primary">Cod: {id}</small>
        </div>
        <h5 className="mb-2 h-18 text-md font-light xl:text-md text-gray-700">
          {truncateString(title ?? 'Titulo de propiedad no registrado', 70)}
        </h5>
        <div className='border border-bottom  mb-4'></div>
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row ">
              <div className="table-cell text-sm px-3">m<sup>2</sup> útiles</div>
              <div className="table-cell text-sm px-3">Dormitorios</div>
              <div className="table-cell text-sm px-3">Habitaciones</div>
              <div className="table-cell text-sm px-3">Estacionamientos</div>
            </div>
          </div>
          <div className="table-row-group ">
            <div className="table-row ">
              <div className="table-cell px-5 "><RiPencilRulerLine fill='#E85512'/>{bedrooms ?? 0}</div>  
              <div className="table-cell px-5"><FaBed fill='#E85512' /><span>{bedrooms ?? 0}</span></div>
              <div className="table-cell px-5"><FaBath  fill='#E85512'/>{bathrooms ?? 0}</div>
              <div className="table-cell px-5"><GiHomeGarage fill='#E85512' />{covered_parkings_lots ?? 0}</div>
            </div>
          </div>
        </div>
      </div>
      {_renderItem(data?.currency?.name, data?.currency?.isoCode, data.price)}
      <div className='flex justify-end'>
      <Link
          to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}  
          onClick={openModal}
          className="inline-flex items-center px-6 py-2 text-sm m-2 font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
        >VER</Link>
{/* 
      <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button> */}


<Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 w-[1200px]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <ModalDetailProperty/>
                {/* <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                  <GalleryCarousel items={property} />
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel> */}
                
    
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* <Link
          // to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
          // to={`https://unnepropiedades.cl/`}
          target="_blank"
          className="inline-flex items-center px-6 py-2 text-sm m-2 font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Ver Más
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link> */}
      </div>

      {/* <div className='flex justify-end'>
        <Button onClick={openModal} type='button'
        className="inline-flex items-center px-6 py-2 text-sm m-2 font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300">Ver</Button>
      </div>

        <Modal
          isOpen={modalOpen}
          toggle={closeModal}
          className="modal-dialog-centered"
          size="lg" zIndex="999"
        >
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                closeModal();
              }}
              className="close"
            >
            </a>
            <h2>Hola

            </h2>
          </ModalBody>
        </Modal> */}

        
    </div>
  );
};

export default PropertyCard;
