import { X } from 'lucide-react';
import React from 'react';

const Tags: React.FC = () => {
  const colors = [
    {
      color:"#EF2425"
    },
    {
      color:"#F5841E"
    },
    {
      color:"#FDC13C"
    },
    {
      color:"#73BE44"
    },
    {
      color:"#02BDE7"
    },
    {
      color:"#72C389"
    },
    {
      color:"#4368B2"
    },
    {
      color:"#9F4C9E"
    },
    {
      color:"#005786"
    },
    {
      color:"#378E42"
    },
    {
      color:"#DA1E4B"
    },
    {
      color:"#C385B9"
    },
    {
      color:"#82D1DE"
    },
    {
      color:"#C485BA"
    },
    {
      color:"#5D1954"
    },
    {
      color:"#B92024"
    },
  ]
  return (
    <div className="p-6 space-y-4 ">
      <div className=" text-[#130940] text-[24px]">Create Tags </div>
      <div className="flex flex-col w-full gap-4 p-8 md:flex-row">
        <div className=" text-[#4B566B] md:w-1/2 w-full space-y-4">
          <div>Please Create a New Tag</div>
          <div className="flex gap-2 px-2 py-1 border-2 border-black rounded-xl ">
            <input className="w-full border-none outline-none " type="text" />
            <X className=" text-[#175AB6]" />
          </div>
          <div>
            Already exists.{' '}
            <span className="text-[#175AB6] underline">replace?</span>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className="max-w-[300px] border-[#175AB6] p-3 ">
            <div className="flex flex-wrap justify-around p-4 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-y-4 ">
              {colors.map(( color, index) => (
                <div
                  key={index}
                  className="flex border-none rounded-full h-14 w-14"
                  style={{backgroundColor:color.color}}
                ></div>
              ))}
            </div>
            <div className=" text-white bg-[#175AB6] py-2 px-4 text-center">
              Add Custom Color
            </div>
            <div className="bg-white text-[#1D90E3] py-2 px-4 text-center border border-[#1D90E3]">
              Remove Color
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
