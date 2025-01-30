import { Table } from '../../components';
import { Search } from 'lucide-react';

const TripLog = () => {
  const columns = [
    {
      header: 'Status',
      accessor: 'status',
      size: 80,
      render: (status: string) => (
        <div
          className={` ${status == 'Active' ? 'bg-[#DBF2E5] border-[#6CEAC0]' : 'bg-[#FDEAEC] border-[#FE696A]'} w-[30px] h-[30px] border  rounded-md`}
        ></div>
      ),
    },
    {
      header: 'User Information',
      accessor: 'userInfo',
      size: 300,
      render: (userInfo: any) => (
        <div className="flex flex-col">
          <div>Name: {userInfo.name}</div>
          <div className="">Email: {userInfo.email}</div>
          <div className="">Last Date of Trip: {userInfo.lastDateOfTrip}</div>
        </div>
      ),
    },
    { header: 'Trip Type/s', accessor: 'tripType', size: 60 },
    { header: 'No. Of Trips', accessor: 'tripsCount', size: 80 },
    { header: 'CO2 Avoided', accessor: 'co2Avoided', size: 80 },
    { header: 'Creds Earned', accessor: 'credsEarned', size: 50 },
    { header: 'Creds Redeemed', accessor: 'credsRedeemed', size: 50 },
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
      credsEarned: 50,
      credsRedeemed: 20,
      details: 'Overview/Row Details Icon.png',
    },
  ];

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 ">
          <div className=" text-[#707070] font-bold text-[24px] ">
            {' '}
            User Log & Status{' '}
          </div>
          <div>
            <input className="px-2 w-[100px] rounded-full border outline-none border-[#707070]"></input>
          </div>

          <div className=" text-[#707070]">To</div>
          <div>
            <input className="px-2 w-[100px] rounded-full border outline-none border-[#707070]"></input>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          <div className="flex items-center gap-2 py-1 px-4 border hover:cursor-pointer border-[#707070] bg-white rounded-xl text-[#707070] shadow-2xl">
            Export
          </div>
          <select className=" bg-[#C1CAE3] px-4 rounded-xl outline-none">
            <option value="">Sort By</option>
            <option value="">Opt 1</option>
            <option value="">Opt 2</option>
          </select>
          <div className="border-[#707070] hover:cursor-pointer items-center flex gap-2 px-4 border-[2px] rounded-2xl">
            <input
              className="w-32 bg-transparent border-none outline-none "
              name="search"
              type="text"
              placeholder="Search Hear "
              value={''}
            ></input>
            <Search className=" text-[#707070]" />
          </div>
        </div>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TripLog;
