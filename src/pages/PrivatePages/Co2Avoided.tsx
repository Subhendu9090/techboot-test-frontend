import React from 'react'
import { GraphCard, HeaderSection } from '../../components'

const Co2Avoided:React.FC =()=> {
  const sampleData = [
    { name: 'Jan', value1: 30},
    { name: 'Feb', value1: 45},
    { name: 'Apr', value1: 60},
    { name: 'May', value1: 55},
  ];
  const filledData =[
    {
      name:"Mile Saved",
      colorCode:"#70AE6E"
    },
   
  ]
  return (
    <div>
      <section>
        <HeaderSection/>
      </section>
      <section>
        <GraphCard filled={filledData} data={sampleData} title="CO2 Avoided" />
      </section>
    </div>
  )
}

export default Co2Avoided
