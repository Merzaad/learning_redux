/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setMemory, setAction, doAction, clearBoard,
} from '../calculator/calculatorSlice';
import { selectValue, selectMemory, selectAction } from './calculatorSlice';
import './calculator.css';

function Calculator() {
  const memory = useAppSelector(selectMemory);
  const value = useAppSelector(selectValue);
  const action = useAppSelector(selectAction);
  const dispatch = useAppDispatch();
  return (
    <div className="container w-25">
      <div className="board">
        {value}
        <br />
        {action}
        <br />
        {memory}
      </div>
      <div className="container d-flex justify-content-between my-1">
        <button type="button" className="btn btn-secondary btn-lg btn-lg" onClick={() => dispatch(setMemory('1'))}>1</button>
        <button type="button" className="btn btn-secondary btn-lg btn-lg" onClick={() => dispatch(setMemory('2'))}>2</button>
        <button type="button" className="btn btn-secondary btn-lg btn-lg" onClick={() => dispatch(setMemory('3'))}>3</button>
        <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch(setAction('-'))}>-</button>
      </div>
      <div className="container d-flex justify-content-between my-1">
        <button type="button" className="btn btn-secondary btn-lg btn-lg" onClick={() => dispatch(setMemory('4'))}>4</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('5'))}>5</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('6'))}>6</button>
        <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch(setAction('+'))}>+</button>
      </div>
      <div className="container d-flex justify-content-between my-1">
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('7'))}>7</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('8'))}>8</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('9'))}>9</button>
        <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch(setAction('*'))}>*</button>
      </div>
      <div className="container d-flex justify-content-between my-1">
        <button type="button" className="btn btn-danger btn-lg" onClick={() => dispatch(doAction(action))}>=</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(setMemory('0'))}>0</button>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => dispatch(clearBoard())}>~</button>
        <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch(setAction('/'))}>/</button>
      </div>
    </div>
  );
}
export default Calculator;
