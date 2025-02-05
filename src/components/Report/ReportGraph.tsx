import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

const ReportGraph: React.FC = () => {
  const data = Array.from({ length: 18 }, (_, index) => ({
    name: `Nov ${index + 1}`,
    value1: Math.floor(Math.random() * 100) + 20,
    value2: Math.floor(Math.random() * 100) + 20,
  }));

  return (
    <div className="w-full p-4 h-96 bg-gray-50">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 5,
            bottom: 5,
          }}
          barGap={-2}
          barCategoryGap={6}
        >
          <defs>
            <pattern
              id="diagonalPattern"
              patternUnits="userSpaceOnUse"
              width="10"
              height="10"
            >
              <rect width="10" height="10" fill="#D9FFD9" />
              <path
                d="M0,0 L10,10
         M-2,8 L8,18"
                style={{
                  stroke: '#3762D0',
                  strokeWidth: 1,
                }}
              />
            </pattern>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            horizontal={true}
            vertical={false}
            fill="#f8fafc"
          />
          <XAxis dataKey="name" fontSize={12} tick={{ fill: '#666' }} />
          <YAxis fontSize={12} tick={{ fill: '#666' }} />
          <Tooltip
            content={<CustomTooltip/>}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ paddingLeft: '20px' }}
            content={renderLegend} // Custom Legend
          />
          <Bar dataKey="value1" fill="url(#diagonalPattern)" name="Value 1" />
          <Bar dataKey="value2" fill="#FDEAEC" fillOpacity={1} name="Value 2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportGraph;

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
      {payload.map((entry: any, index: any) => {
        console.log('Entry', entry);
        return (
          <li
            key={`item-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#130940',
              marginBottom: '5px',
            }}
          >
             <svg width="20" height="20" style={{ marginRight: "8px" }}>
            <rect
              width="20"
              height="20"
              fill={entry.color} // Works for both solid colors and pattern URLs
            />
          </svg>
            {entry.value}
          </li>
        );
      })}
    </ul>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "8px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        {payload.map((entry, index) => (
          <p key={index} style={{ color: "#130940", fontWeight: "bold" }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};