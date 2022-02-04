import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectValue } from './calculatorSlice';

function Calculator() {
  const test = useAppSelector(selectValue);
  return <div>{test}</div>;
}
export default Calculator;
