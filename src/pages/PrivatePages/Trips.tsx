import React from 'react';
import {  GraphCard, HeaderSection } from '../../components';

const Trips: React.FC = () => {
  const sampleData = [
    { name: 'Jan', value1: 30, value2: 20 },
    { name: 'Feb', value1: 45, value2: 35 },
    { name: 'Apr', value1: 60, value2: 40 },
    { name: 'May', value1: 55, value2: 30 },
  ];
  const filledData =[
    {
      name:"Creds Earned",
      colorCode:"#273541"
    },
    {
      name:"Creds Redeemed",
      colorCode:"#92130B"
    }
  ]
  return (
    <div className="space-y-4 ">
       <section>
        <HeaderSection/>
       </section>
       <section>
        <GraphCard filled={filledData} data={sampleData} title="Total Creds - Yearly" />
      </section>
    </div>
  );
};

export default Trips;
