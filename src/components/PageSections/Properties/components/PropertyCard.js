import React from 'react';
import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
  ufToClp
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';

const PropertyCard = ({ data, isList, property }) => {
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
        <div className='flex flex-row justify-between'>
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
        <div class="table w-full">
          <div class="table-header-group">
            <div class="table-row ">
              <div class="table-cell text-sm px-3">m<sup>2</sup> útiles</div>
              <div class="table-cell text-sm px-3">Dormitorios</div>
              <div class="table-cell text-sm px-3">Habitaciones</div>
              <div class="table-cell text-sm px-3">Estacionamientos</div>
            </div>
          </div>
          <div class="table-row-group ">
            <div class="table-row ">
              <div class="table-cell px-5 "><RiPencilRulerLine fill='#E85512'/>{bedrooms ?? 0}</div>  
              <div class="table-cell px-5"><FaBed fill='#E85512' /><span>{bedrooms ?? 0}</span></div>
              <div class="table-cell px-5"><FaBath  fill='#E85512'/>{bathrooms ?? 0}</div>
              <div class="table-cell px-5"><GiHomeGarage fill='#E85512' />{covered_parkings_lots ?? 0}</div>
            </div>
          </div>
        </div>
      </div>
     

        {data?.currency?.name === 'UF' && data?.currency?.isoCode === 'UF' && (
          <div className='flex justify-between'>
            <h1 className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-primary">
              <span className="mr-1">UF: </span>{' '}
              {parseToDecimal(price || 0)} 
            </h1>
            <p className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-black">
              <span className="mr-1">CLP: </span>{' '}
              {price} 
            </p>
          </div>
        )}

        {data?.currency?.name === 'Peso Chileno' &&
          data?.currency?.isoCode === 'CLP' && (
            <div className='flex justify-between'>
              <p className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-black">
                <span className="mr-1">CLP:</span>
                {parseToCLPCurrency(price)}
              </p>
              <p className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-primary">
              <span className="mr-1">UF: </span>{' '}
              {parseToDecimal(price || 0)} 
            </p>
            </div>
          )}

        {/* <Link
          // to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
          to={`https://unnepropiedades.cl/`}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
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
    
  );
};

export default PropertyCard;
