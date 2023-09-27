import React from 'react';
import { parseToCLPCurrency, parseToDecimal } from '../../utils';

const CardMap = ({ property }) => {
  const {
    title,
    types,
    image,
    images,
    address,
    commune,
    city,
    price,
    surface_m2,
    bedrooms,
  } = property;
  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        <img
          src={
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${property?.id}//1.jpg` ??
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${property?.id}//2.jpg` ??
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${property?.id}//3.jpg`
          }
          alt={`small-card-${title}`}
          className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
        />
      </a>

      <div>
        <span className="bg-primary text-white px-2 py-.5 mt-1 rounded-full">
          {types?.[0] ?? 'Propiedad'}
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {address ?? 'Dirección no registrada'} ,{' '}
          {commune ?? 'Comuna no registrada'} , {city ?? 'Ciudad no registrada'}
        </p>

        {property?.currency?.name === 'UF' &&
          property?.currency?.isoCode === 'UF' && (
            <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
              <span className="mr-1">Desde:</span>
              {parseToDecimal(property?.price ?? 0)} UF
            </p>
          )}

        {property?.currency?.name === 'Peso Chileno' &&
          property?.currency?.isoCode === 'CLP' && (
            <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
              <span className="mr-1">Desde:</span>
              {parseToCLPCurrency(property?.price ?? 0)} CLP
            </p>
          )}

        <div>
          <span>
            {`${surface_m2}`} m<sup>2</sup> utiles -{bedrooms} dorms.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
