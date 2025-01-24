import { Table } from '../../components';

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
      render: (Details: any) => <div>{<Details />}</div>,
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
      details: 'NotebookTabs',
    },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Overview;
