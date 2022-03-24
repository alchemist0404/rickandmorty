import React from 'react';
import ReactDOM from 'react-dom';
// import styles
import './assets/style/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloAppProvider from './contexts/ApolloProvider';

ReactDOM.render(
  <React.StrictMode>
    <ApolloAppProvider>
      <App />
    </ApolloAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();