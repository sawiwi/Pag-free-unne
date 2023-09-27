import React from 'react';
import Section from '../Section/Section';
import NewInfo from '../Card/NewInfo';
import { AssociateCardData } from '../../data';

const InfoCardSection = () => {
  return (
    <Section>
      <div
        className="grid grid-cols-[repeat(1,250px)] min-[525px]:grid-cols-[repeat(2,250px)] min-[795px]:grid-cols-[repeat(3,250px)] min-[1367px]:grid-cols-[repeat(5,250px)] place-content-center
                    gap-8"
      >
        {AssociateCardData?.length > 0 &&
          AssociateCardData?.map((e) => <NewInfo key={e.id} data={e} />)}
      </div>
    </Section>
  );
};

export default InfoCardSection;
