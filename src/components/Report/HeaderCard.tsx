import React from 'react';

interface HeaderCardProps {
  title: string;
  description?: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  description = '',
}: HeaderCardProps) => {
  return (
    <div className=" shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-[200px] py-8 px-4 rounded-2xl ">
      <div className=' font-semibold text-[#130940] text-[18px]'>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default HeaderCard;
