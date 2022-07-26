
export const getExpenses = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  // @ts-ignore
  fetch("https://77babbde-8694-4af6-aa88-5397c3cd6b61.mock.pstmn.io/get/categories", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

