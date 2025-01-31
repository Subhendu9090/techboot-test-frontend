import React, { useState } from 'react';
import { Table } from '../../components';
import { ChevronRight, CircleX, File, Search } from 'lucide-react';
const IndividualUserInfo: React.FC = () => {
  const columns = [
    {
      header: 'User Information',
      accessor: 'userInfo',
      size: 300,
      render: (userInfo: any) => (
        <div className="flex flex-col">
          <div>Name:{userInfo.name}</div>
          <div className="">Email:{userInfo.email}</div>
          <div className="">Last Date of Trip{userInfo.lastDateOfTrip}</div>
        </div>
      ),
    },
    { header: 'Trip Type/s', accessor: 'tripType', size: 60 },
    { header: 'No. Of Trips', accessor: 'tripsCount', size: 80 },
    { header: 'CO2 Avoided', accessor: 'co2Avoided', size: 80 },
    { header: 'Miles Saved', accessor: 'milesSaved', size: 80 },
    { header: 'Creds Earned', accessor: 'credsEarned', size: 50 },
    { header: 'Creds Redeemed', accessor: 'credsRedeemed', size: 50 },
    { header: 'Liability', accessor: 'liability', size: 50 },
    {
      header: 'Details',
      size: 50,
      accessor: 'details',
      render: (url: any) => (
        <div>
          {
            <img
              className=" hover:cursor-pointer w-[30px] h-[40px] "
              src={url}
              alt="icon"
            />
          }
        </div>
      ),
    },
  ];

  const data = [
    {
      userInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        lastDateOfTrip: '2025-01-20',
      },
      tripType: 'Business',
      tripsCount: 12,
      co2Avoided: '24 kg',
      milesSaved: '150 miles',
      credsEarned: 50,
      credsRedeemed: 20,
      liability: '$30',
      details: 'Overview/Row Details Icon.png',
    },
  ];
  const [search, setSearch] = useState();
  const handelSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div className='flex flex-col gap-4 '>
      <section className="flex flex-wrap items-center justify-center w-full gap-2">
        <p className="text-center text-[32px] text-[#0E1E2B] font-semibold ">
          Individual User Information
        </p>
        <div className=" text-[#E59F17] px-2 py-1 rounded-2xl border-[#E59F17] bg-[#d0a85933] flex items-center gap-2">
          <File className="w-4 h-4" />
          <p>Construction</p>
          <CircleX className="w-4 h-4" />
        </div>
      </section>
      <section className='flex flex-wrap justify-between '>
        <div className='flex flex-wrap gap-4 '>
          <img src='/IndividualUserInfo/Mask group.svg' alt='profile image'/>
          <div className='flex flex-col gap-4 '>
            <div>
              <p className='text-[24px] font-semibold'>Mr. john Smith</p>
              <p>Organization Name:</p>
              <p>CC Signed Up date:</p>
            </div>
            <div>
              <div className='flex gap-2 '>
                <img src="/IndividualUserInfo/Group.svg" alt="" />
                <p className=' text-[16px]'>Email: john@gmail.com</p>
              </div>
              <div className='flex gap-2 '>
                <img src="/IndividualUserInfo/Vector.svg" alt="" />
                <p className=''>Address: </p>
              </div>
             
            </div>
          </div>
        </div>
        <div>
          <select className='px-2 py-1 text-blue-500 border border-blue-500 rounded-xl ' name="" id="">
            <option value="">User Tags</option>
            <option value="">User Tags</option>
          </select>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap items-end justify-between w-full p-2 min-w-fit">
          <div className="flex flex-wrap items-center">
            Trip Log{' '}
            <span>
              {' '}
              <ChevronRight className="w-5 h-5" />
            </span>{' '}
            Active User
          </div>
          <div className="flex flex-wrap gap-3 ">
            <div className="flex items-center gap-2 py-2 px-4 border hover:cursor-pointer border-[#165AB6] bg-white rounded-xl text-[#165AB6]">
              <img className="" src="Overview/Export.svg" alt="icon" />
              <div>Export</div>
            </div>
            <div className="flex hover:cursor-pointer items-center gap-2 p-2 text-white rounded-xl bg-[#165AB6]">
              <img src="Overview/Filter & Sort Icon.svg" alt="icon" />
              <div>Filter & Sort</div>
            </div>
            <div className="border-[#165AB6] hover:cursor-pointer items-center flex gap-2 px-4 border-[2px] rounded-2xl">
              <input
                className="bg-transparent border-none outline-none "
                name="search"
                type="text"
                placeholder="Search Hear "
                value={search ?? ''}
                onChange={handelSearch}
              ></input>
              <Search className="text-blue-700 " />
            </div>
          </div>
        </div>
        <Table data={data} columns={columns} />
      </section>
    </div>
  );
};

export default IndividualUserInfo;
