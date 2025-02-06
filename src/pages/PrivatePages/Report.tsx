import React from 'react';
import { HeaderCard, ReportGraph } from '../../components';
import { Calendar, TrendingUp } from 'lucide-react';

const cards = [
  {
    title: 'Total trips',
    description:
      '( Altogether Public Transit, Zero Emission & Ride Share Trips )',
    icon: '/Overview/No. of trips icon.svg',
    backgroundColor: '#EFF4FF',
    textColor:"#0E1E2B"
  },
  {
    title: 'Total  users',
    description: '(Altogether Active & Inactive Users)',
    icon: '/Overview/Total Users.svg',
    backgroundColor: '#E0F9DD',
     textColor:"#0E1E2B"
  },
  {
    title: 'Total creds ',
    description: '( Total Creds Earned &Redeemed ) ',
    icon: '/Report/Creds Earned.svg',
    backgroundColor: '#527088',
     textColor:"#FFFFFF"
  },
  {
    title: 'Total CO2 avoided',
    description: '(Total Units of CO2 Avoided.) ',
    icon:'/Overview/Vector.svg',
    backgroundColor: '#70AE6E',
     textColor:"#0E1E2B"
  },
  {
    title: 'Total Miles Saved',
    description: '( Total Number of Miles Saved.)',
    icon:'/Overview/Miles Saved.svg',
    backgroundColor: '#EDD15A',
     textColor:"#0E1E2B"
  },
];

const Report: React.FC = () => {
  return (
    <div className="space-y-4 ">
      <section className="flex justify-end w-full gap-3">
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
        <div className=" flex gap-2 bg-[#175AB6] text-white items-center rounded-xl px-4 py-2">
          <Calendar />
          <div>Today</div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" max-w-[220px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden"
            style={{
              background: index === 2 
                ? card.backgroundColor  
                : `linear-gradient(to right, #FFFFFF, ${card.backgroundColor})`,
            }}
          >
            <HeaderCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              textColor={card.textColor}
            />
          </div>
        ))}
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
              <p className="  text-[#130940] font-bold">Active Users</p>
              <p className="  text-[#707070] font-bold">40</p>
            </div>
            <div className="flex justify-between w-full gap-8">
              <p className="  text-[#130940] font-bold">Non Active Users</p>
              <p className="  text-[#707070] font-bold">20</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ReportGraph />
      </section>
    </div>
  );
};

export default Report;
