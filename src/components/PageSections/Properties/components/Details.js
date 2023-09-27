import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  parseToCLPCurrency,
  clpToUf,
  ufToClp,
  parseToDecimal,
} from '../../../../utils';
import ExchangeRateServices from '../../../../services/ExchangeRateServices';
import { iconsList } from '../../../Icons';

const Details = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { company, price, surface_m2, bedrooms, bathrooms } = property;
  const { RiPencilRulerLine, FaBed, FaBath } = iconsList;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));
      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <div className="border rounded-sm p-4 xl:p-8">
      <h3 className="border-b pb-1 text-gray-800">Empresa {company}</h3>

      <p className="text-sm text-gray-400 my-2">
        Publicado por:{' '}
        <span className="text-gray-800">
          {company ?? 'Empresa no registrada'}
        </span>
      </p>

      <div className="text-sm text-gray-400 my-3">
        <p className="text-gray-400">Desde</p>

        {property?.currency?.name === 'UF' &&
          property?.currency?.isoCode === 'UF' && (
            <>
              <h4 className="text-xl text-gray-700 font-semibold">
                UF {parseToDecimal(property?.price)}
              </h4>
              <p>
                CLP:{' '}
                {parseToCLPCurrency(ufToClp(property?.price, ufCurrentValue))}
              </p>
            </>
          )}

        {property?.currency?.name === 'Peso Chileno' &&
          property?.currency?.isoCode === 'CLP' && (
            <>
              <h4 className="text-xl text-gray-700 font-semibold">
                UF {clpToUf(property?.price, ufCurrentValue)}
              </h4>
              <p>
                CLP:{''} {parseToCLPCurrency(property?.price || 0)}
              </p>
            </>
          )}
      </div>

      <div className="my-5 text-sm text-gray-500">
        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <RiPencilRulerLine />
          </span>
          {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <FaBed />
          </span>
          {bedrooms ?? 0} dorms.
        </div>

        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <FaBath />
          </span>
          {bathrooms ?? 0} baños
        </div>
      </div>

      <div className="w-full">
        <Link
          to="/soy-inversionista/unidades-nuevas"
          className="flex w-full items-center justify-center rounded-full py-2 text-sm font-medium text-center text-white bg-primary hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Cotizar
        </Link>
      </div>
    </div>
  );
};

export default Details;
