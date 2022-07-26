import React from 'react';
import ReactDOM from 'react-dom/client';
import { WithContextContainer } from './context/WithContextContainer'
import { App }from './App';

const ExpenseLogsWithContextContainer = WithContextContainer(App);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExpenseLogsWithContextContainer />
  </React.StrictMode>
);
