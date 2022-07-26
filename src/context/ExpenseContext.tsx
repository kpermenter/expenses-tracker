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
      getExpenses("https://77babbde-8694-4af6-aa88-5397c3cd6b61.mock.pstmn.io/get/expenses").then((res) => {
        if (res) {
          setExpenseLogs((currentExpenseLogs) =>
            ({ ...currentExpenseLogs, data: res.expenses }),
          );
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