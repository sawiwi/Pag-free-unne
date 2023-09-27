import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CircleSteps from './CircleSteps';
import SimpleButton from '../../../../components/Button/SimpleButton';
import ButtonProps from '../../../../components/Button/ButtonProps';

const CircleSection = ({
  ubicationData,
  ColorBorder,
  ColorBg,
  ColorNumberBG,
  ColorTextBG,
  ColorText,
  titleButton,
}) => {
  const titleFont = 'text-2xl';
  const MarginTitle = 'mt-10';

  const titleFontCircle = 'text-2xl';

  return (
    <div className="grid gap-14 grid-cols-1 xl:gap-0">
      {/* <div className="xl:ml-20 2xl:ml-32 pb-5">
        <div className=" xl:max-w-md">
          <h2
            className={`${MarginTitle} text-center ${titleFont} text-gray-800 font-bold`}
          >
            ¿Cómo funciona?
          </h2>
          <div className="flex justify-center mt-5">
            <Link to="/quienes-somos">
              <ButtonProps rounded>Comienza aquí</ButtonProps>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="max-md:h-max transition-all ease-in ">
        <div className="flex  md:max-lg:justify-start justify-center xl:justify-center md:max-lg:pl-5 transition-all ease-in">
          <div
            className={`lg:w-[27rem] lg:h-[27rem] 
                                sm:w-[30rem] md:h-[30rem]
                                flex justify-center items-center w-full h-auto flex-wrap gap-3
                            ${ColorBorder} md:border-dashed md:border-4 md:rounded-full  md:relative `}
          >
            {/* Section Information Center */}
            <div
              className={`w-72 h-72 ${ColorBorder} border-solid border-2 rounded-full flex justify-center items-center transition-all ease-in hover:scale-105 hover:cursor-pointer`}
            >
              <div
                className={`w-60 h-60 ${ColorBg} rounded-full text-center flex justify-center items-center`}
              >
                <h3 className={`font-medium ${titleFontCircle} text-white`}>
                  ¿Cómo funciona?
                </h3>
              </div>
            </div>

            {/* Section Info Steps */}
            {ubicationData.length > 0
              ? ubicationData.map((e) => (
                  <CircleSteps
                    stepData={e}
                    key={e.id}
                    ColorNumberBG={ColorNumberBG}
                    ColorTextBG={ColorTextBG}
                    ColorText={ColorText}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
      <div>
        <h2 className={`${MarginTitle} text-center ${titleFont} text-gray-800 font-bold`}>
          {titleButton}
        </h2>
        <div className="flex justify-center mt-5">
          <a href="#formulario">
            <ButtonProps rounded>Comienza aquí</ButtonProps>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default CircleSection;
