import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExpenseLogs, ExpenseLogsValues } from './context/ExpenseContextInterface';
import { ToolbarExpenses } from './components/Toolbar/Toolbar';
import { ExpensesTable } from './components/Table/Table';
import { ExpenseLogsContext, ExpenseLogsProvider } from './context/ExpenseContext';
import { WithContextContainer } from './context/WithContextContainer'
import { App }from './App';

const MessagesWithContextContainer = WithContextContainer(App);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MessagesWithContextContainer />
  </React.StrictMode>
);
