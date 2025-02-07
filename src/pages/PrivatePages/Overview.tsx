import { useState } from 'react';
import { BarGraph, Card1, Table } from '../../components';
import { Card1Props } from '../../components/Overview/Card1';
import { formatDateToDDMMYYYY } from '../../utils/util';
import { Calendar, Search, TrendingUp } from 'lucide-react';

function Overview() {
  const columns = [
    {
      header: 'Status',
      accessor: 'status',
      size: 80,
      render: (status: any) => (
        <button className="px-2 py-1 text-green-500 bg-transparent border border-green-500 text-[14px] rounded-full">
          {status}
        </button>
      ),
    },
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
      status: 'Active',
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

  const cardData: Card1Props[] = [
    {
      headerImageUrl: '/Overview/No. of trips icon.svg',
      headerTitle: 'Trips',
      value: '200',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#EFF4FF',
    },
    {
      headerImageUrl: '/Overview/Total Users.svg',
      headerTitle: 'Users',
      value: '200',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#E0F9DD',
    },
    {
      headerImageUrl: '/Overview/Total Creds Icon.svg',
      headerTitle: ' Creds Earned',
      value: '200',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: 'rgb(132 154 173)',
    },
    {
      headerImageUrl: '/Overview/Vector.svg',
      headerTitle: ' CO2 Avoided',
      value: '600',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#E0F9DD',
    },
    {
      headerImageUrl: '/Overview/points-and-dollars-exchange-svgrepo-com 2.svg',
      headerTitle: 'Creds Redeemed',
      value: '27',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: 'rgb(129 172 231)',
    },
    {
      headerImageUrl: '/Overview/Miles Saved.svg',
      headerTitle: 'Miles Saved',
      value: '400',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#EDD15A',
    },
  ];

  const date = new Date();
  const [search, setSearch] = useState<null | string>();
  const handelSearch = (e: any) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className="flex flex-col ">
      {/* 1st section */}
      <section className="flex items-center justify-center w-full ">
        <p className=" text-[#130940] text-2xl font-semibold">
          {formatDateToDDMMYYYY(date)}
        </p>
      </section>

      <section className="flex flex-col w-full gap-2 mb-4 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <div className=" text-center text-[#0E1E2B] px-4 font-semibold text-[24px]">
            {' '}
            Readings
          </div>
          <div className=" shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[16px] rounded-[16px] text-center gap-4 justify-around flex flex-wrap w-full">
            {cardData.map((data, index) => {
              return (
                <div key={index} className="min-w-[230px]">
                  <Card1
                    key={index}
                    headerImageUrl={data.headerImageUrl}
                    headerTitle={data.headerTitle}
                    value={data.value}
                    footerImageUrl={data.footerImageUrl}
                    footerData={data.footerData}
                    footerTitle={data.footerTitle}
                    backgroundColor={data.backgroundColor}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="flex justify-between w-full ">
            <div></div>
            <div className=" text-center text-[#0E1E2B] px-4 font-semibold text-[24px]">
              {' '}
              Trips
            </div>
            <div className=" flex items-center justify-around gap-2 text-white bg-[#175AB6] rounded-xl px-4 font-semibold text-[15px]">
              {' '}
              <span>
                <Calendar />
              </span>
              <p>Today</p>
            </div>
          </div>

          <div className="relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-h-[440px] p-[16px] rounded-[16px] flex flex-col">
            <div className="px-4 py-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:absolute top-3 right-3 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-evenly w-full gap-[20px]">
                  <img
                    className="w-[40px] h-[40px] rounded-[8px]"
                    src="/Overview/Frame 1000006660.svg"
                    alt="Liability Icon"
                  />
                  <span className="text-[16px] font-semibold text-[#0E1E2B]">
                    Trips Insights
                  </span>
                  <div className="text-[#1A7DD3] font-semibold">160</div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <div className="pb-2 space-y-2">
                  <div className="flex items-center justify-center gap-1 text-sm font-semibold text-black">
                    <TrendingUp className=" text-[#2F5C28]" />
                    <span className="text-[#2F5C28] font-semibold">+4%</span>
                    <span>vs last Year</span>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Public Transit</div>
                    <div className=" text-[#165AB6] font-semibold">80</div>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Zero Emission</div>
                    <div className=" text-[#0E1E2B] font-semibold">20</div>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Ride Share</div>
                    <div className=" text-[#2F5C28] font-semibold">60</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full sm:justify-center pt-[70px] pr-[120px] ">
              <div className="flex flex-col gap-2 min-w-fit max-w-[150px] ">
                <div className="flex items-center gap-4 ">
                  <div className=" rounded-2xl w-2 h-4 bg-[#0E1E2B]"></div>
                  <div>Zero Emission</div>
                </div>
                <div className="flex items-center gap-4 ">
                  <div className="rounded-2xl w-2 h-4 bg-[#165AB6]"></div>
                  <div>Public Transit</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl w-2 h-4 bg-[#2F5C28]"></div>
                  <div>Ride Share</div>
                </div>
              </div>
            </div>
            {/* <div className="flex-grow"></div> */}
            <div>
              <BarGraph />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between w-full p-2 min-w-fit">
          <div className=" text-[#130940] text-[24px] font-semibold">
            Recent User Status
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
        <Table columns={columns} data={data} />
      </section>
    </div>
  );
}

export default Overview;
