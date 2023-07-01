/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import Nav from './Nav'
import Home from './Home'
import CalculatorSetting from './features/calculator/CalculatorSetting'
import TestCapturingState from './features/testCapturingState/testCapturingState'
import TestImmer from './features/testImmer/testImmer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/app" element={<App />} />
            <Route path="/setting" element={<CalculatorSetting />} />
            <Route path="/testCapturingState" element={<TestCapturingState />} />
            <Route path="/testImmer" element={<TestImmer />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
