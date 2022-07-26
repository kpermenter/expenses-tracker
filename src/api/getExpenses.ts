// get all expenses
export const getExpenses = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch(error => console.log('error', error));
};

// create new expense
export const createExpense = (url: string) => {
  return fetch(url)
  .then((response) => response.json())
  .catch(error => console.log('error', error));
};