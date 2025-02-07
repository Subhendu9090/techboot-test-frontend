import React from 'react';
import { GraphCard, HeaderSection } from '../../components';

const TotalUsers: React.FC = () => {
  const sampleData = [
    { name: 'Jan', value1: 30},
    { name: 'Feb', value1: 45 },
    { name: 'Apr', value1: 60 },
    { name: 'May', value1: 55 },
  ];
  const filledData = [
    {
      name: 'Creds Earned',
      colorCode: '#273541',
    },
    {
      name: 'Creds Redeemed',
      colorCode: '#92130B',
    },
  ];
  return (
    <div className="space-y-4 ">
      <section>
        <HeaderSection />
      </section>
      <section>
        <GraphCard
          filled={filledData}
          data={sampleData}
          title="Total Creds - Yearly"
        />
      </section>
    </div>
  );
};

export default TotalUsers;
