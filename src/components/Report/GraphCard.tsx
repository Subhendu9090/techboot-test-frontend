import { TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface GraphCardProps {
  title: string;
  data: { name: string; value1: number; value2?: number }[];
  filled: { name: string; colorCode: string }[];
}

const GraphCard: React.FC<GraphCardProps> = ({ title, data, filled }) => {
  const [barSize, setBarSize] = useState(getBarSize());

  function getBarSize() {
    if (window.innerWidth < 600) return 20;
    if (window.innerWidth < 1024) return 30;
    return 40;
  }

  useEffect(() => {
    const handleResize = () => setBarSize(getBarSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <div className="flex flex-col flex-wrap items-center justify-between mb-4 space-y-4 md:flex-row">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col gap-4 ">
            {filled.map((data, index) => (
              <div key={index} className="flex items-center gap-3 ">
                <div style={{backgroundColor:data.colorCode}} className="w-2 h-4 rounded-md "></div>
                <p>{data.name}</p>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  top-3 right-3 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-evenly w-full gap-[20px]">
                <img
                  className="w-[40px] h-[40px] rounded-[8px]"
                  src="/Report/Creds Earned2.svg"
                  alt="Liability Icon"
                />
                <span className="text-[16px] font-semibold text-[#0E1E2B]">
                  Creds Insights
                </span>
                <div className="text-[#275C42] font-semibold">160</div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <div className="pb-2 space-y-2">
                <div className="flex items-center justify-center gap-1 text-sm font-semibold text-black">
                  <TrendingUp className=" text-[#2F5C28]" />
                  <span className="text-[#2F5C28] font-semibold">+4%</span>
                  <span>vs last quarter</span>
                </div>
                <div className="flex justify-between gap-8 ">
                  <div>Active Trips</div>
                  <div className=" text-[#275C42] font-semibold">200</div>
                </div>
                <div className="flex justify-between gap-8 ">
                  <div>Inactive Trips</div>
                  <div className=" text-[#275C42] font-semibold">800</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' md:w-[75%] w-full'>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={data} >
        <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar radius={[8, 8, 8, 8]} dataKey="value1" fill={filled[0].colorCode} barSize={barSize} />
          {data.some((d) => d.value2 !== undefined) && (
            <Bar dataKey="value2" radius={[8, 8, 8, 8]} fill={filled[1]?.colorCode} barSize={barSize} />
          )}
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphCard;
