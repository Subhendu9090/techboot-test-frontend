// components/Table.tsx
import React from 'react';

type Column = {
  header: string;
  accessor: string;
};

type TableProps = {
  columns: Column[];
  data: any;
  actionClicked?: any;
};

const Table: React.FC<TableProps> = ({ columns, data, actionClicked }) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
      <table className="min-w-full text-sm text-left">
        <thead className="text-white bg-teal-800">
          <tr>
            {columns.map((column, idx) => (
              <th key={idx} className="px-6 py-3 font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row: any, rowIndex: number) => (
            <tr
              key={rowIndex}
              className="transition-colors border-t cursor-pointer hover:bg-gray-100"
            >
              {columns.map((column, colIndex) =>
                column.accessor == 'action' ? (
                  <td key={colIndex} className="px-6 py-4 text-gray-800">
                    <button
                      className="px-4 py-2 text-white bg-teal-800 rounded-xl"
                      onClick={()=>actionClicked(row?._id)}
                    >
                      Action
                    </button>
                  </td>
                ) : (
                  <td key={colIndex} className="px-6 py-4 text-gray-800">
                    {String(row[column.accessor])}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
