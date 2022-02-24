import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './routes/AppRouter';

import'./styles/index.scss';



ReactDOM.render(
  <Provider store={store}>

    <AppRouter />
  </Provider>
,
  document.getElementById("root")
);


