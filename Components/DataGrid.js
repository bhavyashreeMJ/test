import * as React from "react";
import { DataGrid,GridEventListener } from '@mui/x-data-grid';
import HomeNavBar from "./HomeNavbar";
import Alert from '@mui/material/Alert';


const columns = [
  { field: "id", headerName: "ID", width: 100, hideable: false },
  {
    field: "broker",
    headerName: "Broker",
    width: 120,
    headerClassName: "super-app-theme--header",
    headerAlign: "center"
  },
  { field: "region1", headerName: "Asia ex Japan", width: 170, editable: true },
  { field: "region2", headerName: "Australlia", width: 170, editable: true },
  { field: "region3", headerName: "Canada", width: 120, editable: true },
  {
    field: "region4",
    headerName: "Developed EMEA/UK",
    width: 170,
    editable: true
  },
  {
    field: "region5",
    headerName: "Emerging Europe",
    width: 170,
    editable: true
  },
  {
    field: "region6",
    headerName: "Japan Latin America",
    width: 170,
    editable: true
  },
  { field: "region7", headerName: "United States", width: 170, editable: true },
  { field: "total", headerName: "Total", width: 120 },
  { field: "perOfBudget", headerName: "% of Budget", width: 170 },
  { field: "HOH", headerName: "HOH% Differance", width: 170 }
];

const rows = [
  {
    id: 1,
    broker: "ABG Sundal Collier",
    region1: "800",
    region2: "400",
    region3: "200",
    region4: "1000",
    region5: "5000",
    region6: "9000",
    region7: "8600",
    total: "25000",
    perOfBudget: "0.089%",
    HOH: "0.089%"
  },
  {
    id: 2,
    broker: "ABN Amro Oddo-BHF",
    region1: "1800",
    region2: "400",
    region3: "200",
    region4: "0",
    region5: "0",
    region6: "0",
    region7: "600",
    total: "3000",
    perOfBudget: "0.089%",
    HOH: "0.089%"
  },
  {
    id: 3,
    broker: "Avior Capital",
    region1: "800",
    region2: "400",
    region3: "200",
    region4: "0",
    region5: "0",
    region6: "0",
    region7: "600",
    total: "2000",
    perOfBudget: "0.089%",
    HOH: "0.089%"
  },
  {
    id: 4,
    broker: "Barclays",
    region1: "0",
    region2: "0",
    region3: "0",
    region4: "0",
    region5: "0",
    region6: "0",
    region7: "0",
    total: "0",
    perOfBudget: "0.089%",
    HOH: "0.089%"
  },
  {
    id: 5,
    broker: "Citi",
    region1: "800",
    region2: "400",
    region3: "200",
    region4: "0",
    region5: "0",
    region6: "0",
    region7: "600",
    total: "2000",
    perOfBudget: "0.089%",
    HOH: "0.089%"
  }
];

var regionValue=null;
var brokerValue=null;

export default function HomeDataGrid() {
  const [message, setMessage] = React.useState('');
 // const data = useMovieData();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    setMessage(`"${params.row.broker}"`);
  };


  return (
      <div class="container" style={{ height: 500, width: "100%" }}>
        <div class="row">
          <h4>
            Region:- {regionValue} &nbsp;&nbsp;&nbsp; Broker:- {message}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;Budget: $36,722
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dollars Remaning: $100
          </h4>
        </div>
        <DataGrid
         rows={rows} 
         columns={columns} 
         pageSize={5}
         onRowClick={handleRowClick} 
         />
               {message && <Alert severity="info">{message}</Alert>}

      </div>
  );
}
