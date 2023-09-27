import React from 'react';
import { Link } from 'react-router-dom';

const SimpleButton = () => {
  return (
    <Link to="/quienes-somos">
      <div className="flex justify-center mt-5">
        <button className="btn text-white px-10 bg-primary border-none rounded-full hover:bg-primary-opacity">
          Comienza aquí
        </button>
      </div>
    </Link>
  );
};

export default SimpleButton;
