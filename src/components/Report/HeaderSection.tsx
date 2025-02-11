import React from 'react'
import HeaderCard from './HeaderCard'
import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom';
import { paths } from '../../routes/Path';

const HeaderSection:React.FC=()=> {
  const cards = [
    {
      title: 'Total trips',
      description:
        '( Altogether Public Transit, Zero Emission & Ride Share Trips )',
      icon: '/Overview/No. of trips icon.svg',
      backgroundColor: '#EFF4FF',
      textColor:"#0E1E2B",
      navigateUrl :paths.trips
    },
    {
      title: 'Total  users',
      description: '(Altogether Active & Inactive Users)',
      icon: '/Overview/Total Users.svg',
      backgroundColor: '#E0F9DD',
       textColor:"#0E1E2B",
       navigateUrl :paths.totalUser
    },
    {
      title: 'Total creds ',
      description: '( Total Creds Earned &Redeemed ) ',
      icon: '/Report/Creds Earned.svg',
      backgroundColor: '#527088',
       textColor:"#FFFFFF",
       navigateUrl :paths.totalCreds
    },
    {
      title: 'Total CO2 avoided',
      description: '(Total Units of CO2 Avoided.) ',
      icon:'/Overview/Vector.svg',
      backgroundColor: '#70AE6E',
       textColor:"#0E1E2B",
       navigateUrl :paths.co2Avoided
    },
    {
      title: 'Total Miles Saved',
      description: '( Total Number of Miles Saved.)',
      icon:'/Overview/Miles Saved.svg',
      backgroundColor: '#EDD15A',
      textColor:"#0E1E2B",
      navigateUrl :paths.mileSaved
    },
  ];
  return (
    <div className='space-y-4 '>
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
          <Link to={card.navigateUrl}
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
          </Link>
        ))}
      </section>
    </div>
  )
}

export default HeaderSection
