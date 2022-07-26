import * as React from 'react';
import { useContext } from 'react';
import { ExpenseLogsContext } from '../../context/ExpenseContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createExpense } from '../../api/getExpenses';

export const FormDialog = () => {
  const { expenseLogs, updateContextValue } = useContext(ExpenseLogsContext);

  const {
    data,
    createModalOpen,
  } = expenseLogs;
  
  const handleClose = () => {
    /* @ts-ignore */
    updateContextValue('createModalOpen', false);
  };

  const saveExpense = () => {
    createExpense(
      'https://77babbde-8694-4af6-aa88-5397c3cd6b61.mock.pstmn.io/post/expenses',
      {
        "expenseDate" : "10/01/2000",
        "itemName" : "Milk",
        "category": "Diary",
        "itemAmount": 400
    });
  }

  return (
    <>
      <Dialog open={createModalOpen} onClose={handleClose}>
        <DialogTitle>Create Expense</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Expense Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Purchased Date"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveExpense}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
