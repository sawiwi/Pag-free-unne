
import React from 'react';
import Section from '../../Section/Section';


const AboutMiniComponent = () => {
    return (
      <Section>
        <div className="">
          <img
              src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
              alt="about-img"
              className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[280px] xl:h-[280px] xl:mt-20 xl:mx-14"
            />
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center">
              Pablo Ramirez P.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center ">
              Fundador y Gerente General.
            </p> 
            <div className='xl:mx-20 py-2'>
                <a href='#AboutSectionScroll'  type='button' className='inline-flex items-center p-10 py-2 w-52 m-2 text-center  xl:w-52 xl:h-12 text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg'>Más sobre mi</a>
            </div>  
            </div> 
    </Section>

    );
  };

  export default AboutMiniComponent;