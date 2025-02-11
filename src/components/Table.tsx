import React, { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  header: string;
  accessor: string;
  render?: (value: any) => ReactNode;
  size?: number;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  currentPage: number;
  rowsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  isLoading?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  currentPage,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
  isLoading = false,
}) => {
  const totalPages = Math?.ceil(totalItems / rowsPerPage);

  const renderLoadingRows = () => {
    return Array(rowsPerPage)
      .fill(0)
      .map((_, index) => (
        <tr key={`loading-${index}`} className="bg-white border border-[#AAAAAA] border-x-0">
          {columns.map(( _, colIndex) => (
            <td key={colIndex} className="p-[16px] text-center">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </td>
          ))}
        </tr>
      ));
  };

  return (
    <div className="w-full text-[16px] overflow-x-auto text-[#0E1E2B]">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th
                key={index}
                className="p-[16px] font-bold text-[#0E1E2B] bg-[#F8FAFF] text-start"
                style={{
                  width: column.size ? `${column.size}px` : '100px',
                }}
              >
                {(column?.accessor === 'status' || column?.accessor === 'user_status' ) && (
                  <img
                    src="/Overview/Info.svg"
                    alt="icon"
                    className="w-4 h-4 ml-[40px] cursor-pointer top-4 right-5"
                  />
                )}
                {column?.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            renderLoadingRows()
          ) : data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white border border-[#AAAAAA] border-x-0 hover:bg-gray-100"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-[16px] text-center">
                    {column.render ? column.render(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-lg font-medium text-gray-500">No Data Found</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex items-center justify-end pb-4 mt-4 space-x-2">
        <div>Rows per page </div>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="p-1 border rounded"
          disabled={isLoading}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center justify-center w-10 h-10 p-2 border rounded">
          {currentPage}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Table;