import React, { useState, useEffect, useRef } from 'react';

interface TableDetailsProps {
  image?: string;
  name?: string;
  carbonCred?: string;
  address?: string;
  tags?: string[];
  onClose: () => void;
}

const TableDetails: React.FC<TableDetailsProps> = ({
  image = 'djdj',
  name = 'John Doe',
  carbonCred = '78',
  address = 'nmsbdhjs',
  tags = ['jnfndj', 'hjhh'],
  onClose,
}) => {
  const [showAddress, setShowAddress] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      className="absolute left-0 my-2 z-50 w-[250px] bg-white rounded-lg px-6 pb-28 pt-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-black"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt="Logo"
            className="object-cover w-4 h-4 rounded-full"
          />
          <h2 className="">Name: {name}</h2>
        </div>

        <p className=" text-start">Carbon Cred Signed Up : {carbonCred}</p>
        <div className="flex">
          <p> Address:****</p>
          {!showAddress ? (
            <div
              className=" cursor-pointer underline text-[#175AB6]"
              onClick={() => setShowAddress(true)}
            >
              Show Address
            </div>
          ) : (
            <p className="p-2 text-xs text-gray-800 bg-yellow-100 rounded">
              {address}
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 text-[#175AB6]">
        <select className="w-full p-2 border rounded-full outline-none border-[#175AB6]">
          <option value="">Tags</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableDetails;
