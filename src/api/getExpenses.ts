// get all expenses
export const getExpenses = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch(error => console.log('error', error));
};

// create new expense
// @ts-ignore
export const createExpense = (url: string, body) => {
  // const requestOptions = {
  //   method: 'POST',
  //   body,
  //   redirect: 'follow'
  // };
  return fetch(url, body)
  .then((response) => response.json())
  .catch(error => console.log('error', error));
};