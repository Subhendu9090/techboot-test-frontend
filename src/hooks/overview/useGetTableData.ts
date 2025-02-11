import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/Store';
import { overViewTableData } from '../../controllers/overview/overviewController';

function useGetTableData(currentPage: number, rowsPerPage: number) {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const fetchTableData = async () => {
    setIsLoading(true);
    try {
      const authToken = token && token !== 'undefined' ? token : '';
      const response = await overViewTableData('QWEGLE', currentPage, rowsPerPage, authToken);

      console.log('Table data Response', response);
      if (response.success) {
        setTotalItems(response?.data?.total_users);
        setTableData(response?.data?.user_data);
      }
    } catch (error) {
      console.log('Error in getting table data', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [currentPage, rowsPerPage]);

  return { tableData, totalItems, isLoading};
}

export default useGetTableData;
