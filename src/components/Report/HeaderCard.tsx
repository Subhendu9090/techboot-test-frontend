import React from 'react';

interface HeaderCardProps {
  title: string;
  description?: string;
  icon?: string;
  textColor?:string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  description = '',
  icon = '',
  textColor=""
}: HeaderCardProps) => {
  return (
    <div className="w-full h-full p-4 "style={{color:textColor}}>
      <div className='flex gap-3'>
        <img className='w-8 h-8' src={icon} alt="icon" />
        <div className=" font-semibold text-[16px]" >{title}</div>
      </div>
      <div className='p-2 font-normal '>{description}</div>
    </div>
  );
};

export default HeaderCard;
