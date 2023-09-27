import React from 'react';

const ClientCard = ({ item }) => {
  const {  avatars, name, last_names, types, extra, comments } = item;

  const bgColors = [
    'bg-primary-ligth',
    'bg-yellow-50',
    'bg-gray-50',
    'bg-pink-50',
  ];
  const getRadmonColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div
      className={`${getRadmonColor} flex justify-center items-center w-[95%] mx-auto rounded-[50px] h-[500px] xl:h-[600px] cursor-pointer`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12">
          <img
            src={avatars}
            alt={`avatar-${name}`}
            className="rounded-full"
            width={130}
            height={130}
          />
        </div>

        <div className="text-center w-4/6 mx-auto">
          <p className="text-md font-semibold">
            {comments}
          </p>
        </div>

        <div className="text-center mt-10 flex justify-center items-center flex-col">
          <h4 className="text-lg font-bold">
            {name} {last_names} - {extra}
          </h4>
          <p className="text-md text-gray-700">{types}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
