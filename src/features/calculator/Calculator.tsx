/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectValue } from './calculatorSlice';

function Calculator() {
  const test = useAppSelector(selectValue);
  return (
    <div className="container">
      {test}
    </div>
  );
}
export default Calculator;
