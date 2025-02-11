import { useState } from 'react';
import { BarGraph, Card1, Table } from '../../components';
import {
  formatDateToDDMMYYYY,
  transformDataForOverViewGraph,
} from '../../utils/util';
import { Calendar, Search, TrendingUp } from 'lucide-react';
import { TableDetails } from '../../DialogBox';
import useGetCardData from '../../hooks/overview/useGetCardData';
import useGetTableData from '../../hooks/overview/useGetTableData';
import { useGetGraphData } from '../../hooks/overview/useGetGraphData';

function Overview() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const columns = [
    {
      header: 'Status',
      accessor: 'user_status',
      size: 80,
      render: (row: any) => (
        <button
          className={`px-2 py-1 ${row?.user_status === 'Active' ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500 '} bg-transparent border  text-[14px] rounded-full`}
        >
          {row?.user_status}
        </button>
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
    { header: 'Miles Saved', accessor: 'miles_saved', size: 80 },
    { header: 'Creds Earned', accessor: 'creds_redeemed', size: 50 },
    { header: 'Creds Redeemed', accessor: 'creds_redeemed', size: 50 },
    {
      header: 'Details',
      size: 50,
      accessor: 'details',
      render: (row: any) => (
        <div className="relative">
          <img
            className="hover:cursor-pointer w-[30px] h-[40px]"
            src="Overview/Row Details Icon.png"
            alt="icon"
            onClick={() =>
              setSelectedRow(
                selectedRow === row?.user_info?.username
                  ? null
                  : row?.user_info?.username
              )
            }
          />
          {selectedRow === row?.user_info?.username && (
            <div className="absolute left-[-200px] z-50  top-10">
              <TableDetails
                image={row?.image}
                carbonCred={row?.creds_redeemed}
                name={row?.user_info?.username}
                tags={row?.tags}
                address={
                  row?.user_info?.home_address + row?.user_info?.home_address
                }
                onClose={() => setSelectedRow(null)}
              />
            </div>
          )}
        </div>
      ),
    },
  ];
  const date = new Date();
  const [search, setSearch] = useState<null | string>();
  const handelSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const { tableData, totalItems, isLoading } = useGetTableData(
    currentPage,
    rowsPerPage
  );
  const { cardsData } = useGetCardData();
  const { graphData } = useGetGraphData('QWEGLE', 3, 2024);
  const formattedData = transformDataForOverViewGraph(
    graphData?.monthly_breakdown
  );

  return (
    <div className="flex flex-col ">
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
            {cardsData.map((data, index) => {
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
                  <div className="text-[#1A7DD3] font-semibold">
                    {graphData?.current_period?.data?.total_trips}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <div className="pb-2 space-y-2">
                  <div className="flex items-center justify-center gap-1 text-sm font-semibold text-black">
                    <TrendingUp className=" text-[#2F5C28]" />
                    <span className="text-[#2F5C28] font-semibold">
                      {graphData?.growth?.total_trips || '0'}%
                    </span>
                    <span>vs last Year</span>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Public Transit</div>
                    <div className=" text-[#165AB6] font-semibold">
                      {graphData?.current_period?.data?.trip_types[
                        'Public Transit'
                      ] || '0'}
                    </div>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Zero Emission</div>
                    <div className=" text-[#0E1E2B] font-semibold">
                      {graphData?.current_period?.data?.trip_types[
                        'Zero Emission'
                      ] || '0'}
                    </div>
                  </div>
                  <div className="flex justify-between gap-8 ">
                    <div>Ride Share</div>
                    <div className=" text-[#2F5C28] font-semibold">
                      {graphData?.current_period?.data?.trip_types[
                        'Ride Share'
                      ] || '0'}
                    </div>
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
            <div>
              <BarGraph data={formattedData} />
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
            <div className="flex hover:cursor-pointer items-center gap-2 px-4 py-2 text-white rounded-xl bg-[#165AB6]">
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
        <Table
          columns={columns}
          data={tableData}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
}
export default Overview;
