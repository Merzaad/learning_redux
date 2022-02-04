/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setMemory, setAction, doAction } from '../calculator/calculatorSlice';
import { selectValue, selectMemory, selectAction } from './calculatorSlice';

function Calculator() {
  const memory = useAppSelector(selectMemory);
  const value = useAppSelector(selectValue);
  const action = useAppSelector(selectAction);
  const dispatch = useAppDispatch();
  return (
    <div className="container w-25">
      <div className="container bg-dark text-white">
        {value}
      </div>
      <div className="container bg-dark text-white">
        {action}
        {memory}
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('1'))}>1</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('2'))}>2</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('3'))}>3</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setAction('-'))}>-</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('4'))}>4</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('5'))}>5</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('6'))}>6</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setAction('+'))}>+</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('7'))}>7</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('8'))}>8</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setMemory('9'))}>9</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setAction('*'))}>*</button>
      </div>
      <div className="container d-flex justify-content-center my-1">
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(doAction(action))}>=</button>
        <button type="button" className="btn btn-secondary">*</button>
        <button type="button" className="btn btn-secondary">*</button>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(setAction('/'))}>/</button>
      </div>
    </div>
  );
}
export default Calculator;
