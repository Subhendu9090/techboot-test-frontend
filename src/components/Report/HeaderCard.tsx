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
    <div className=" shadow-lg max-w-[243px] p-8 rounded-2xl ">
      <div className=' font-semibold text-[#130940] text-[24px]'>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default HeaderCard;
