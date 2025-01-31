import React from 'react';

export type Card1Props = {
  headerImageUrl?: string;
  headerTitle?: string;
  value?: string | number;
  footerImageUrl?: string;
  footerData?: string | number;
  footerTitle?: string; 
  backgroundColor?:string;
};

const Card1: React.FC<Card1Props> = ({
  headerImageUrl = '/Overview/Liability.png',
  headerTitle = 'Today Liability',
  value = '600',
  footerImageUrl = '/Overview/Path 1008.png',
  footerData = '+4%',
  footerTitle = 'vs last quarter',
  backgroundColor="#6695d6"
}) => {

  const gradientStyle = {
    background: `linear-gradient(to right, #FFFFFF, ${backgroundColor})`
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-center max-w-[300px] max-h-[140px] rounded-[16px] p-4 bg-white "
      style={gradientStyle}
      >
        {/* Header Section */}
        <div className="relative w-full">
          <img
            className={`w-[30px] h-[30px] rounded-[8px] absolute text-white`}
            src={headerImageUrl}
            alt="Liability Icon"
          />
          <span className="text-[16px] py-1 font-semibold text-center text-[#0E1E2B]">
            {headerTitle}
          </span>
        </div>

        {/* Value Section */}
        <div className="text-[32px] font-semibold text-center text-[#0E1E2B]">
          {value}
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-center gap-1 text-sm font-light text-gray-500">
          <img src={footerImageUrl} alt="Trend Icon" />
          <span className="text-[#67AC5B] font-medium">{footerData}</span>
          <span>{footerTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
