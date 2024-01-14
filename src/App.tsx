import { useCounter } from './hooks/useCounter';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

function App() {
  const { count, increment } = useCounter();

  return (
    <div className="App">
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
];

export default App;
