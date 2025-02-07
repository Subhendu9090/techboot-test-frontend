import React from 'react'
import { GraphCard, HeaderSection } from '../../components'

const MileSaved:React.FC =()=> {
  const sampleData = [
    { name: 'Jan', value1: 30},
    { name: 'Feb', value1: 45},
    { name: 'Apr', value1: 60},
    { name: 'May', value1: 55},
  ];
  const filledData =[
    {
      name:"Miles Saved",
      colorCode:"#EDD15A"
    }
  ]
  return (
    <div>
      <section>
        <HeaderSection/>
      </section>
      <section>
        <GraphCard filled={filledData} data={sampleData} title="Miles Saved  - Monthly" />
      </section>
    </div>
  )
}

export default MileSaved
