import React from 'react';
import { HeaderCard } from '../../components';

const cards = [
  {
    title: 'Total no. of trips',
    description: '(Both Zero emission & public)',
  },
  {
    title: 'Total no. of users',
    description: '(Both active & inactive)',
  },
  {
    title: 'Total creds ',
    description: '(Creds earned & redeemed)',
  },
  {
    title: 'Total CO2 avoided by users',
    description: '',
  },
];

const Report: React.FC = () => {
  return (
    <div className='p-2'>
      <section className="flex justify-between">
        <div className="flex flex-wrap justify-center gap-2 ">
          {cards.map((card, index) => (
            <HeaderCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex gap-2 h-fit">
          <select className='' name="" id="">
            <option value="">Filter By</option>
          </select>
          <button className="px-4 py-2 border shadow-lg outline-none h-fit rounded-xl">
            Export
          </button>
        </div>
      </section>
    </div>
  );
};

export default Report;
