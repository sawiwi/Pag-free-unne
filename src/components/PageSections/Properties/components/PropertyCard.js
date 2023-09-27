import React from 'react';
import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';

const PropertyCard = ({ data, isList }) => {
  const { id, title, image, address, commune, city, price, types } = data;
  const { BiMap } = iconsList;

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 hover:shadow-lg md:flex-row'
          : 'w-full'
      } border rounded-xl border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >
      <img
        className={`${
          isList
            ? 'h-[250px] w-[100%] xl:w-[400px] object-cover rounded-t-xl xl:rounded-none'
            : 'rounded-t-xl'
        } h-64 xl:h-64 w-[100%] object-cover`}
        src={`https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${id}//1.jpg`}
        alt={`top-img-${title}`}
        width="full"
      />

      <div className="p-5">
        <span className="uppercase text-primary">Cod: {id}</span>
        <h5 className="mb-2 h-18 text-md font-light xl:text-md text-gray-700">
          {truncateString(title ?? 'Titulo de propiedad no registrado', 70)}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-400 flex items-start justify-start">
          <BiMap className="text-xl mr-1" />
          {truncateString(
            `${address || 'Dirección no registrada'} ${
              commune || 'Comuna no registrada'
            } ${city || 'Ciudad no registrada'}`,
            60
          )}
        </p>

        {data?.currency?.name === 'UF' && data?.currency?.isoCode === 'UF' && (
          <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
            <span className="mr-1">{types?.[0]}: </span>{' '}
            {parseToDecimal(price || 0)} UF
          </p>
        )}

        {data?.currency?.name === 'Peso Chileno' &&
          data?.currency?.isoCode === 'CLP' && (
            <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
              <span className="mr-1">{types?.[0]}:</span>
              {parseToCLPCurrency(price)} CLP
            </p>
          )}

        <Link
          to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Ver Detalles
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
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
