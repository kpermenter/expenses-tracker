export interface ExpenseLogsValues {
  value: string,
  label: string,
  _id: string,
}

export interface ExpenseLogs {
  expenseLogs: ExpenseLogsValues,
  updateContextValue?: (name: string, values: any) => void,
  // @ts-ignore
  updateContextValues?: (object) => void,
}