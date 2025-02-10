import { HttpClient } from '../../utils/HttpClient';

const overViewTableData = (companyName :string, page:number, rowsPerPage:number) => {
  // user_status/?company=QWEGLE&page=1&rows=5
  let url = `user_status/?company=${companyName}&page=${page}&rows=${rowsPerPage}`;

  return HttpClient.apiCall(url, 'GET');
};

export { overViewTableData };
