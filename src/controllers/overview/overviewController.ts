import { HttpClient } from '../../utils/HttpClient';

const overViewTableData = (
  companyName: string,
  page: number,
  rowsPerPage: number,
  token?:string
) => {
  // user_status/?company=QWEGLE&page=1&rows=5
  let url = `user_status/?company=${companyName}&page=${page}&rows=${rowsPerPage}`;

  return HttpClient.apiCall(url, 'GET',token);
};

const overViewCardData=(
  companyName: string="QWEGLE",
  quarter: number,
  year: number,
  token?:string
)=>{
  let url = `cards/?company=${companyName}&quarter=${quarter}&year=${year}`;
  // https://cc.qwegle.com/adminapi/cards/?company=QWEGLE&quarter=2&year=2024
  return HttpClient.apiCall(url, 'GET',token);
};

const overViewGraphData=(
  companyName: string="QWEGLE",
  quarter: number,
  year: number,
  token?:string
)=>{
  // https://cc.qwegle.com/adminapi/graph/?company=QWEGLE&quarter=2&year=2024
  let url = `graph/?company=${companyName}&quarter=${quarter}&year=${year}`;
  return HttpClient.apiCall(url, 'GET',token);
}

export { overViewTableData ,overViewCardData,overViewGraphData};
