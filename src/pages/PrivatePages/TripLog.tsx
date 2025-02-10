import { useEffect, useState } from 'react';
import { Table } from '../../components';
import { Search } from 'lucide-react';
import { overViewTableData } from '../../controllers/overview/overviewController';
import { useAuth } from '../../contexts/Store';
import { formatDateToDDMMYYYY } from '../../utils/util';

const TripLog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading , setIsLoading]=useState(false)
  const [tableData, setTableData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  
  const columns = [
    {
      header: 'Status',
      accessor: 'status',
      size: 80,
      render: (row: any) => (
        <div
          className={` ${row?.user_status == 'Active' ? 'bg-[#DBF2E5] border-[#6CEAC0]' : 'bg-[#FDEAEC] border-[#FE696A]'} w-[30px] h-[30px] border  rounded-md`}
        ></div>
      ),
    },
    {
      header: 'User Information',
      accessor: 'user_info',
      size: 300,
      render: (row: any) => (
        <div className="flex flex-col">
          <div>Name:{row?.user_info?.username}</div>
          <div className="">Email:{row?.user_info?.email}</div>
          <div className="">
            Last Date of Trip :
            {formatDateToDDMMYYYY(row?.user_info?.last_trip_date)}
          </div>
        </div>
      ),
    },
    { header: 'Trip Type/s', accessor: 'trip_types', size: 60 },
    { header: 'No. Of Trips', accessor: 'num_trips', size: 80 },
    { header: 'CO2 Avoided', accessor: 'co2_avoided', size: 80 },
    { header: 'Creds Earned', accessor: 'creds_redeemed', size: 50 },
    { header: 'Creds Redeemed', accessor: 'creds_redeemed', size: 50 },
    {
      header: 'Details',
      size: 50,
      accessor: 'details',
      render: () => (
        <div>
          {
            <img
              className=" hover:cursor-pointer w-[30px] h-[40px] "
              src="Overview/Row Details Icon.png"
              alt="icon"
            />
          }
        </div>
      ),
    },
  ];

  let { token } = useAuth();
  
  const fetchTableData = async () => {
    setIsLoading(true);
    try {
      if (token === 'undefined' || token === null) {
        token = '';
      }
      const response = await overViewTableData(
        'QWEGLE',
        currentPage,
        rowsPerPage,
        token
      );
      console.log('Table data Response', response);
      if (response.success) {
        setTotalItems(response?.data?.total_users);
        setTableData(response?.data?.user_data);
      }
    } catch (error) {
      console.log('Error in getting table data', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTableData();
  }, [currentPage, rowsPerPage]);

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
      <Table
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={setRowsPerPage}
        columns={columns}
        data={tableData}
        isLoading={loading}
      />
    </div>
  );
};

export default TripLog;
