import { createContext, useState, useContext } from "react";
import { ExpenseLogsValues, ExpenseLogs } from "./ExpenseContextInterface";

const defaultExpenseLogs: ExpenseLogsValues = {
  value: '',
  label: '',
  _id: '',
};

export const ExpenseLogsContext = createContext<ExpenseLogs>({ expenseLogs: defaultExpenseLogs });

interface props {}

export const ExpenseLogsProvider = ({ children }: React.PropsWithChildren<props>) => {
  const [expenseLogs, setExpenseLogs] = useState<ExpenseLogsValues>(defaultExpenseLogs);

  const {
    value,
    label,
    _id,
  } = expenseLogs;

  const updateContextValue = (valueName: string, value: any) => {
    setExpenseLogs((currentExpenseLogs) => ({ ...currentExpenseLogs, [valueName]: value }));
  };

  const updateContextValues = (values: object) => {
    setExpenseLogs((currentExpenseLogs) => ({ ...currentExpenseLogs, ...values }));
  };

  return(
    <ExpenseLogsContext.Provider value={{ expenseLogs, updateContextValue, updateContextValues }}>
      {children}
    </ExpenseLogsContext.Provider>
  );
}

export const useExpenseLogsContext = () => useContext(ExpenseLogsContext);