import { Search } from 'lucide-react';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col justify-between w-full gap-4">
      <section className="flex flex-wrap w-full gap-2">
        <div className="flex flex-col gap-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-[360px] h-fit w-[39%]">
          <div className=" text-[#707070] p-4 font-bold text-[36px] bg-[#EFF4FF]">
            Highlight Users
          </div>
          <div className="px-2 py-1 ">
            <div className="p-0">
              <div className="relative flex p-2 bg-gray-200 border ">
                <Search className="w-6 h-6 text-[#888888]" />
                <input
                  className="ml-4 bg-transparent border-none outline-none "
                  placeholder=" Find User"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 py-2">
              <img
                src="/Profile/Group 1311.svg"
                className="object-contain w-6 h-8 "
                alt="Edit"
                title="Edit"
              />
              <button className="px-4 py-2 border rounded-lg ">Delete</button>
              <button className="px-4 py-2 bg-[#C1CAE3] rounded-lg ">
                Add
              </button>
            </div>
            <div className="flex gap-4 px-4 ">
              <input type="checkbox" className="w-6 h-6 " />
              <div>
                <p className="font-medium ">John Smith</p>
                <p className="font-normal ">
                  Consistent in using public transport for the past 4 weeks.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              <div className="flex flex-wrap items-center gap-4 border-b-2">
                <input type="checkbox" className="w-5 h-5 " />
                <p className="py-2 font-medium">John Smith</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-b-2 ">
                <input type="checkbox" className="w-5 h-5 " />
                <p className="py-2 font-medium">John Smith</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-b-2 ">
                <input type="checkbox" className="w-5 h-5 " />
                <p className="py-2 font-medium">John Smith</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-[310px] min-[300px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[29%] h-fit">
          <div className=" text-[#707070] p-4 font-bold text-[36px] bg-[#EFF4FF]">
            Suppress Users
          </div>
          <div className="px-2 py-1 ">
            <div className="flex flex-col gap-3 px-4">
              <div className="flex flex-wrap items-center gap-4 border-b-2">
                <input type="checkbox" className="w-4 h-4" />
                <p className="py-2 font-medium">John Smith</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-b-2 ">
                <input type="checkbox" className="w-4 h-4" />
                <p className="py-2 font-medium">John Smith</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-[330px] w-[29%] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-fit">
          <div className=" text-[#707070] p-4 font-bold text-[36px] bg-[#EFF4FF]">
            CC Logo/Qr code
          </div>
          <div className="px-2 py-1 ">
            <div className="flex flex-col gap-3 px-4">
              <div className="flex flex-wrap items-center gap-4 border-b-2">
                <input type="checkbox" className="w-4 h-4" />
                <p className="py-2 font-medium">John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-between w-full pt-12 bg-center bg-cover "
        style={{
          backgroundImage:
            "url('/Dashboard/We are reducing carbon footprints-2 1.svg')",
        }}
      >
        
        {/* Content Section */}
        <div className="relative mx-auto text-white">
          <h2 className="md:text-[54px] font-bold text-[#F7A0A0] text-3xl">
            We are celebrating the achievements of
          </h2>

          <div className="p-4 mt-10 space-y-6 text-[#FDEAEC] gap-8 flex flex-col">
            {/* Step 1 */}
            <div className="flex flex-col gap-4 pl-8 ">
              <h3 className="text-3xl md:text-[54px] font-semibold">
                John Smith
              </h3>
              <p className=" md:pl-16 text-[24px] pl-8 text-gray-200">
                Consistent in using public transport for the past 4 weeks
              </p>
            </div>

            {/* Step 2 */}
            <div className="pl-[15%]  flex flex-col gap-4">
              <h3 className="text-3xl md:text-[54px]  font-semibold">
                Emma Smith
              </h3>
              <p className=" md:pl-16 text-[24px] pl-8 text-gray-200">
                Consistent in using public transport for the past 4 weeks
              </p>
            </div>

            {/* Step 3 */}
            <div className="pl-[30%]  flex flex-col gap-4 ">
              <h3 className="text-3xl md:text-[54px]  font-semibold">
                Michael Johnson
              </h3>
              <p className="pl-8 md:pl-16 text-gray-200 text-[24px]">
                Consistent in using public transport for the past 4 weeks
              </p>
            </div>
          </div>
        </div>

        {/* Logo Image at Bottom Right Corner */}
        <div className=" p-8 text-[24px] bg-[#6B3122] flex-col gap-2 text-white mr-2 flex items-center self-end">
          <div className="font-bold text-center ">CC Logo</div>
          <div className="font-medium text-center ">Download the app</div>
          <img src="/Profile/Vector.svg " alt="Logo" className="w-[120px] object-contain" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
