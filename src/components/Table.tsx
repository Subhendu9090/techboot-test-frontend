import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// TypeScript interfaces for prop types
interface Column {
  header: string;
  accessor: string;
  render?: (value: any) => ReactNode;
  size?: number;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  const renderCellContent = (column: Column, row: Record<string, any>) => {
    if (column.render) {
      return column.render(row[column.accessor]);
    }

    const value = column.accessor
      .split('.')
      .reduce((obj, key) => obj?.[key], row);

    return value !== undefined ? String(value) : '';
  };

  return (
    <div className="w-full text-[16px] overflow-x-auto text-[#0E1E2B]">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column, index) => {
              if (column.accessor === 'status') {
                return (
                  <th
                    key={index}
                    className=" p-[16px] font-bold text-[#0E1E2B] bg-[#F8FAFF] text-start"
                    style={{
                      width: column.size ? `${column.size}px` : '100px',
                    }}
                  >
                     <img
                      src="/Overview/Info.svg"
                      alt="icon"
                      className="w-4 h-4 ml-[40px] cursor-pointer top-4 right-5"
                    />
                    {column.header}
                   
                  </th>
                );
              } else {
                return (
                  <th
                    key={index}
                    className={`p-[16px] font-bold text-[#0E1E2B] bg-[#F8FAFF] text-start`}
                    style={{
                      width: column.size ? `${column.size}px` : '100px',
                    }}
                  >
                    {column.header}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className="bg-white border border-[#AAAAAA] border-x-0 hover:bg-gray-100"
              >
                {columns.map((column, colIndex) => {
                  return (
                    <td key={colIndex} className="p-[16px] text-center">
                      {renderCellContent(column, row)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-end mt-4 space-x-2">
        {/* Rows per page dropdown */}
        <div>Rows per page </div>
        <select
          value={rowsPerPage}
          onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
          className="p-1 border rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        {/* Pagination controls */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center justify-center w-10 h-10 p-2 border rounded">
          {currentPage}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Table;
