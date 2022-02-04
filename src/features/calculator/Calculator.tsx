/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectValue } from './calculatorSlice';

function Calculator() {
  const test = useAppSelector(selectValue);
  return (
    <div className="container w-25">
      <div className="container bg-dark text-white">
        {test}
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary">1</button>
        <button type="button" className="btn btn-secondary">2</button>
        <button type="button" className="btn btn-secondary">3</button>
        <button type="button" className="btn btn-secondary">-</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary">4</button>
        <button type="button" className="btn btn-secondary">5</button>
        <button type="button" className="btn btn-secondary">6</button>
        <button type="button" className="btn btn-secondary">+</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary">7</button>
        <button type="button" className="btn btn-secondary">8</button>
        <button type="button" className="btn btn-secondary">9</button>
        <button type="button" className="btn btn-secondary">=</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary">*</button>
        <button type="button" className="btn btn-secondary">/</button>
        <button type="button" className="btn btn-secondary">^</button>
        <button type="button" className="btn btn-secondary">#</button>
      </div>
    </div>
  );
}
export default Calculator;
