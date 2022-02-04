/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';

import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

function Nav() {
  return (
    <div>
      <ul style={{ display: 'flex', gap: '5px' }}>
        <Link to="/">home</Link>
        <Link to="/app">App</Link>
      </ul>
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<div />} />
            <Route path="/app" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
