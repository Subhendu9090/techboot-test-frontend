import React, { useState } from 'react';
import { Table } from '../../components';
import { ChevronRight, CircleX, File, Search } from 'lucide-react';
const IndividualUserInfo: React.FC = () => {
  const columns = [
    { header: 'Dates', accessor: 'dates', size: 100 },
    { header: 'Trip Type/s', accessor: 'tripType', size: 100 },
    { header: 'No. Of Trips', accessor: 'tripsCount', size: 80 },
    { header: 'CO2 Avoided', accessor: 'co2Avoided', size: 80 },
    { header: 'Miles Saved', accessor: 'milesSaved', size: 80 },
    { header: 'Creds Earned', accessor: 'credsEarned', size: 50 },
    { header: 'Creds Redeemed', accessor: 'credsRedeemed', size: 50 },
    { header: 'Rewards Generated', accessor: 'rewardsGenerated', size: 100 },
  ];

  const data = [
    {
      dates:'MM/DD/YY',
      tripType: 'Public Transit',
      tripsCount: 8,
      co2Avoided: 8,
      milesSaved: 8,
      credsEarned: 8,
      credsRedeemed: 8,
      rewardsGenerated: 8,
    },
    {
      dates:'MM/DD/YY',
      tripType: 'Public Transit',
      tripsCount: 8,
      co2Avoided: 8,
      milesSaved: 8,
      credsEarned: 8,
      credsRedeemed: 8,
      rewardsGenerated: 8,
    },
    {
      dates:'MM/DD/YY',
      tripType: 'Public Transit',
      tripsCount: 8,
      co2Avoided: 8,
      milesSaved: 8,
      credsEarned: 8,
      credsRedeemed: 8,
      rewardsGenerated: 8,
    },
    {
      dates:'MM/DD/YY',
      tripType: 'Public Transit',
      tripsCount: 8,
      co2Avoided: 8,
      milesSaved: 8,
      credsEarned: 8,
      credsRedeemed: 8,
      rewardsGenerated: 8,
    },
    {
      dates:'MM/DD/YY',
      tripType: 'Public Transit',
      tripsCount: 8,
      co2Avoided: 8,
      milesSaved: 8,
      credsEarned: 8,
      credsRedeemed: 8,
      rewardsGenerated: 8,
    },
  ];
  
  const [search, setSearch] = useState();
  const handelSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 ">
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
      <section className="flex flex-wrap justify-between ">
        <div className="flex flex-wrap gap-4 ">
          <img src="/IndividualUserInfo/Mask group.svg" alt="profile image" />
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[24px] mb-2 font-semibold">Mr. john Smith</p>
              <p>Organization Name:</p>
              <p>CC Signed Up date:</p>
            </div>
            <div className="flex gap-8">
              <div className="flex gap-2 ">
                <img src="/IndividualUserInfo/Group.svg" alt="" />
                <p className=" text-[16px]">Email: john@gmail.com</p>
              </div>
              <div className="flex gap-2 ">
                <img src="/IndividualUserInfo/Vector.svg" alt="" />
                <p className="">
                  Address:{' '}
                  <span className=" underline text-[#175AB6] ml-4">
                    Show Address
                  </span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <select
            className="px-4 py-2 text-blue-500 border border-blue-500 outline-none cursor-pointer rounded-2xl "
            name=""
            id=""
          >
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
