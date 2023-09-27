import React from 'react';

const ButtonProps = ({
  className = 'text-white',
  fontSize = 'capitalize',
  sizeClass = 'px-10',
  background = 'bg-primary hover:bg-primary-opacity',
  title = 'Comienza aquí',
  rounded = '',
}) => {
  const Classes = `btn border-none ${background} ${fontSize} ${sizeClass} ${className}`;

  /* button with rounded full */
  if (!!rounded) {
    return <button className={`rounded-full ${Classes}`}>{title}</button>;
  }

  /* Button por defecto */
  return <button className={`rounded-lg ${Classes}`}>{title}</button>;
};

export default ButtonProps;
