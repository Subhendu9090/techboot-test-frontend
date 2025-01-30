import React from 'react';

const Card2: React.FC = () => {
  return (
    <div className="border flex flex-col justify-between items-center border-[#527088] max-w-[300px] max-h-[140px] rounded-[16px] p-4 bg-white shadow-md">
      <div className="flex items-center justify-between w-full">
        <img
          className={`w-[40px] bg-[#527088] h-[40px] rounded-[8px] p-2 text-white`}
          src="/Overview/Group 1335.png"
          alt="Liability Icon"
        />
        <span className="text-[16px] font-semibold text-[#0E1E2B]">
          Today Creds Earned
        </span>
      </div>
      <div className='flex justify-around w-full '>
        <div className='flex flex-col '>
          <div className='text-[32px] font-semibold text-[#0E1E2B]'>340</div>
          <div>Earned</div>
        </div>
        <div className='flex flex-col '>
          <div className='text-[32px] font-semibold text-[#0E1E2B]'>60</div>
          <div className='text-[16px] font-light text-[#0E1E2B]'>Redeemed</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
