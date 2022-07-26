import { useContext } from 'react';
import { ExpenseLogsContext } from '../../context/ExpenseContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const ExpensesTable = () => {
  const { expenseLogs, updateContextValue } = useContext(ExpenseLogsContext);

  const {
    data,
    createModalOpen,
  } = expenseLogs;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Expense Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Purchased Date</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}          
            >
              <TableCell align="left">{row.itemName}</TableCell>
              <TableCell align="left">{row.expenseDate}</TableCell>
              <TableCell align="left">{row.itemAmount}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
