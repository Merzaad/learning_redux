/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increaseByValue, pop } from '../calculator/calculatorSlice';
import { selectValue } from './calculatorSlice';

function Calculator() {
  const test = useAppSelector(selectValue);
  const dispatch = useAppDispatch();
  return (
    <div className="container w-25">
      <div className="container bg-dark text-white">
        {test}
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('1'))}>1</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('2'))}>2</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('3'))}>3</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('-'))}>-</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('4'))}>4</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('5'))}>5</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('6'))}>6</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('+'))}>+</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('7'))}>7</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('8'))}>8</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('9'))}>9</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('*'))}>*</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(pop())}>pop</button>
        <button type="button" className="btn btn-secondary">*</button>
        <button type="button" className="btn btn-secondary">*</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(increaseByValue('/'))}>/</button>
      </div>
    </div>
  );
}
export default Calculator;
