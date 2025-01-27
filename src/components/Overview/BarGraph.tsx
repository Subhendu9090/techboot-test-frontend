import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  {
    name: 'oct',
    ZeroEmission: 2400,
    PublicTransit: 2400,
    RideShare: 4000,
  },
  {
    name: 'Nov.',
    ZeroEmission: 2400,
    PublicTransit: 2400,
    RideShare: 4000,
  },
  {
    name: 'Dec.',
    ZeroEmission: 2400,
    PublicTransit: 2400,
    RideShare: 4000,
  }
];

const BarGraph = () => {
  return (
    <div className="w-full p-4 h-[350px] ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          barGap={5}
          barCategoryGap={0}
        >
          {/* X and Y Axis */}
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            tickLine={false}
            axisLine={true}
            tick={{
              dx: -5,
              dy: -10,
              fill: '#000',
              fontSize: 12,
            }}
            tickSize={0}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
            <Legend
            layout="vertical"
            verticalAlign="top"
            align="center"
            wrapperStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '10px',
            }}
          />

          {/* Bars */}
          <Bar dataKey="PublicTransit" fill="#1C90E3" radius={[8, 8, 8, 8]} barSize={30} />
          <Bar dataKey="RideShare" fill="#527088" radius={[8, 8, 8, 8]} barSize={30} />
          <Bar dataKey="ZeroEmission" fill="#508B46" radius={[8, 8, 8, 8]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
