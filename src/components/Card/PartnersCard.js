import React from 'react';

const PartnersCard = ({ item }) => {
  const { names, avatar, last_name, type, comment } = item;

  return (
    <div
      className={`bg-[#FFF8DF] flex justify-center items-center w-[95%] mx-auto h-[600px] cursor-pointer`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12">
          <img
            src={avatar}
            alt={`avatar-${names}`}
            className="rounded-full"
            width={130}
            height={130}
          />
        </div>

        <div className="text-center w-4/6 mx-auto">
          <p className="text-md font-semibold">
           {comment}
          </p>
        </div>

        <div className="text-center mt-10 flex justify-center items-center flex-col">
          <h4 className="text-lg font-bold">
            {names} {last_name}
          </h4>
          <p className="text-md text-gray-700">{type}</p>
        </div>
      </div>
    </div>
  );
};



export default PartnersCard;
