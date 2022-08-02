import { createContext, useState, useContext, useEffect } from "react";
import { ExpenseLogsValues, ExpenseLogs } from "./ExpenseContextInterface";
import { getExpenses } from "../api/getExpenses";

const defaultExpenseLogs: ExpenseLogsValues = {
  data: [],
  createModalOpen: false,
};

export const ExpenseLogsContext = createContext<ExpenseLogs>({ expenseLogs: defaultExpenseLogs });

interface props {}

export const ExpenseLogsProvider = ({ children }: React.PropsWithChildren<props>) => {
  const [expenseLogs, setExpenseLogs] = useState<ExpenseLogsValues>(defaultExpenseLogs);

  const {
    data,
  } = expenseLogs;

  useEffect(() => {
    const FetchExpenseLogs = async () => {
      // @ts-ignore
      getExpenses().then((res) => {
        if (res) {
          console.log(res);
          setExpenseLogs((currentExpenseLogs) =>
            ({ ...currentExpenseLogs, data: res }),
          );
          console.log(data)
        }
      });
    }
    FetchExpenseLogs();
  }, []);

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