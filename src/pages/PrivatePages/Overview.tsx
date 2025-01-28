import { BarGraph, Card1, Card2, Table } from '../../components';
import { Card1Props } from '../../components/Overview/Card1';
import { formatDateToDDMMYYYY } from '../../utils/util';

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
      render: (url: any) => <div>{<img className=' hover:cursor-pointer w-[30px] h-[40px] ' src={url} alt='icon' />}</div>,
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
      headerImageUrl: '/Overview/Liability.png',
      headerTitle: 'Today Liability',
      value: '600',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#273541',
    },
    {
      headerImageUrl: '/Overview/Miles Saved.png',
      headerTitle: 'Today Miles Saved',
      value: '200',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#165AB6',
    },
    {
      headerImageUrl: '/Overview/Total Users.png',
      headerTitle: 'Today Users',
      value: '200',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#165AB6',
    },
    {
      headerImageUrl: '/Overview/Group 1335.png',
      headerTitle: 'Today Creds Earned',
      value: '600',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#527088',
    },
    {
      headerImageUrl: '/Overview/Vector.png',
      headerTitle: 'Today CO2 Avoided',
      value: '27',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#273541',
    },
    {
      headerImageUrl: '/Overview/No. of trips icon.png',
      headerTitle: 'Today Trips',
      value: '400',
      footerImageUrl: '/Overview/Path 1008.png',
      footerData: '+4%',
      footerTitle: 'vs last quarter',
      backgroundColor: '#1A7DD3',
    },
  ];
  const date = new Date()
  return (
    <div>
      {/* 1st section */}
      <section className="flex items-center justify-center w-full p-2">
          <p className=' text-[#130940] text-[32px] font-semibold'>{formatDateToDDMMYYYY(date)}</p>
      </section>

      <section className="flex flex-col w-full gap-2 mb-4 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <div className=" text-[#0E1E2B] px-4 font-semibold text-[24px]">
            {' '}
            Readings This Quarter{' '}
          </div>
          <div className="grid shadow-lg p-[16px] rounded-[16px] sm:grid-cols-2 grid-cols-1  text-center gap-[16px] justify-items-center w-full">
            {cardData.map((data, index) => {
              if (index==3) {
                return(
                 <div key={index} className="min-w-[240px]">
                   <Card2/>
                 </div>
                )
              }else{
                return(<div key={index} className="min-w-[240px]">
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
                </div>)
              }
})}
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className=" text-[#0E1E2B] px-4 font-semibold text-[24px]">
            {' '}
            Trips This Quarter{' '}
          </div>
          <div className="relative shadow-lg min-h-[485px] p-[16px] rounded-[16px] flex flex-col">
            <div className="absolute px-4 py-3 bg-white shadow-md top-3 right-3 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center w-full gap-[20px]">
                  <img
                    className="w-[40px] h-[40px] rounded-[8px] p-2 bg-blue-500 text-white"
                    src="/Overview/No. of trips icon.png"
                    alt="Liability Icon"
                  />
                  <span className="text-[16px] font-semibold text-[#0E1E2B]">
                    Trips Insights 160
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <div className="pb-2 space-y-2">
                  <div className="flex items-center justify-center gap-1 text-sm font-light text-gray-500">
                    <img src="/Overview/Path 1008.png" alt="Trend Icon" />
                    <span className="text-[#67AC5B] font-medium">+4%</span>
                    <span>vs last Year</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div>Public Transit</div>
                    <div className=" text-[#165AB6]">80</div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div>Zero Emission</div>
                    <div className=" text-[#0E1E2B]">20</div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div>Ride Share</div>
                    <div className=" text-[#2F5C28]">60</div>
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
            <div className="flex-grow"></div>
            <div>
              <BarGraph />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Table columns={columns} data={data} />
      </section>
    </div>
  );
}

export default Overview;
