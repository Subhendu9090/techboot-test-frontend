import React from 'react';
import { HeaderCard, ReportGraph } from '../../components';
import { TrendingUp } from 'lucide-react';

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
    <div className="space-y-4 ">
      <section className="flex flex-col-reverse justify-center gap-4 sm:flex-row sm:gap-0 sm:justify-between">
        <div className="flex flex-wrap justify-center gap-1 ">
          {cards.map((card, index) => (
            <HeaderCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex gap-1 h-fit">
          <select
            className="bg-[#C1CAE3] outline-none shadow-xl rounded-2xl p-2 "
            name=""
            id=""
          >
            <option value="">Filter By</option>
          </select>
          <button className="px-4 py-2 border border-[#707070] shadow-xl outline-none h-fit rounded-2xl">
            Export
          </button>
        </div>
      </section>
      <section className="flex pt-[130px] flex-wrap justify-between w-full">
        <div>
          <button className="bg-[#C1CAE3] outline-none shadow-xl rounded-2xl py-2 px-4 ">
            Date Range
          </button>
        </div>
        <div className="flex flex-wrap gap-2 ">
          <div className="p-4 max-w-[260px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl space-y-2 ">
            <div className="flex justify-between gap-2 ">
              <img src="/Report/Vector.svg" alt="icon" />
              <p className=" text-[24px] text-[#707070] font-bold">
                Total Users
              </p>
              <div className="text-[24px] text-[#707070] font-bold">65</div>
            </div>
            <div className="flex justify-between gap-2">
            <TrendingUp className="w-10 h-10 text-black" />
              <div className="text-[24px] text-[#707070]">
                1% Up from the last month{' '}
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-4 max-w-[260px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl space-y-2 text-[20px] ">
            <div className="flex justify-between w-full gap-8 ">
              <p className="  text-[#130940] font-bold">
                Active Users
              </p>
              <p className="  text-[#707070] font-bold">40</p>
            </div>
            <div className="flex justify-between w-full gap-8">
              <p className="  text-[#130940] font-bold">
              Non Active Users
              </p>
              <p className="  text-[#707070] font-bold">20</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ReportGraph/>
      </section>
    </div>
  );
};

export default Report;
