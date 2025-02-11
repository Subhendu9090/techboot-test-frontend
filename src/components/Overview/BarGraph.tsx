import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
interface BarGraphData {
  name: string;
  ZeroEmission: number;
  PublicTransit: number;
  RideShare: number;
}
interface BarGraphProps {
  data: BarGraphData[];
}

const BarGraph:React.FC<BarGraphProps> = ({data}) => {
  return (
    <div className="w-full h-[250px] ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: -20,
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
          
          {/* Bars */}
          <Bar dataKey="PublicTransit" fill="#1C90E3" radius={[8, 8, 8, 8]} barSize={30} />
          <Bar dataKey="ZeroEmission" fill="#527088" radius={[8, 8, 8, 8]} barSize={30} />
          <Bar dataKey="RideShare" fill="#508B46" radius={[8, 8, 8, 8]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
