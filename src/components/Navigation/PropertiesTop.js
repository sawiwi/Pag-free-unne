import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconsList } from '../Icons';
import { paginationTopLimit } from '../../constants/consts/company';
import { PropertiesContext } from '../../context/properties/PropertiesContext';

const PropertiesTop = ({
  totalItems,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { sortOrder, handleSortChange } = contextData;
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt } = iconsList;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      default:
        return 'Propiedades';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3  mb-4 bg-white w-full">
      <div className="flex justify-center items-center my-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-ligth text-gray-800 text-center">
            {getTitle(pathname)}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between xl:justify-between items-center">
        {/* <small className="text-sm p-1 rounded">
          Encontradas por página: {properties?.length ?? 0}
        </small> */}
        <div className='flex flex-row justify-start'>   
          <p className="text-md p-1 rounded">
            Total Propiedades: {totalItems ?? 0}
          </p>
        </div>
        {/* <small className="text-sm p-1 rounded">
          Por página: {paginationTopLimit.limit ?? 0}
        </small> */}
        <div className='flex flex-row justify-end'>
          <ul className="flex">
            <li className="w-[200px] sm:flex hidden mr-5 text-gray-600">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-1 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
              >
                <option value="">Ordenar por:</option>
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
              </select>
            </li>

            <li
              onClick={() => {
                setIsGrid(true);
                setIsList(false);
              }}
              className={`${
                isGrid ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
              } mx-1 p-2.5 cursor-pointer `}
            >
              <BsFillGridFill />
            </li>
            <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 cursor-pointer text-gray-500'
              } mx-1 p-2.5 cursor-pointer`}
            >
              <FaThList />
            </li>
            {/* <li className="mx-1 p-2.5 bg-gray-100 cursor-pointer text-gray-500">
              <Link to="/propiedades/propiedades-en-mapa">
                <FaMapMarkerAlt />
              </Link>
            </li> */}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default PropertiesTop;
