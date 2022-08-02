// get all expenses
export const getExpenses = () => {
  return fetch('/expenses')
    .then((response) => response.json())
    .catch(error => console.log('error', error));
};

// @ts-ignore
export const createNewExpense = (body) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body,
    redirect: 'follow'
  };

  // @ts-ignore
  fetch("/expenses", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}