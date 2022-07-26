import { ExpenseLogs, ExpenseLogsValues } from './context/ExpenseContextInterface';
import { ExpenseLogsContextContainer } from './context/ExpenseContextContainer';
import { ToolbarExpenses } from './components/Toolbar/Toolbar';
import { ExpensesTable } from './components/Table/Table';
import { ExpenseLogsContext, ExpenseLogsProvider } from './context/ExpenseContext';
import { WithContextContainer } from './context/WithContextContainer';
import { ContextContainer } from './context/ContextContainer';

export const App = () => {
  return (
    // @ts-ignore
    <ContextContainer>
    <ExpenseLogsContextContainer>
      <ToolbarExpenses />
      <ExpensesTable />
      </ExpenseLogsContextContainer>
    </ContextContainer>
  );
}

