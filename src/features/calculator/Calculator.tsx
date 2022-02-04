/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
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
    <Container>
      <div className="board">
        {value}
        <br />
        {action}
        <br />
        {memory}
      </div>
      <div>
        <Container>
          <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button color="error" onClick={() => dispatch(setMemory('1'))}>1</Button>
            <Button color="error" onClick={() => dispatch(setMemory('2'))}>3</Button>
            <Button color="error" onClick={() => dispatch(setMemory('3'))}>2</Button>
            <Button color="error" onClick={() => dispatch(setAction('-'))}>-</Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button color="error" onClick={() => dispatch(setMemory('4'))}>4</Button>
            <Button color="error" onClick={() => dispatch(setMemory('5'))}>5</Button>
            <Button color="error" onClick={() => dispatch(setMemory('6'))}>6</Button>
            <Button color="error" onClick={() => dispatch(setAction('+'))}>+</Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button color="error" onClick={() => dispatch(setMemory('7'))}>4</Button>
            <Button color="error" onClick={() => dispatch(setMemory('8'))}>5</Button>
            <Button color="error" onClick={() => dispatch(setMemory('9'))}>6</Button>
            <Button color="error" onClick={() => dispatch(setAction('*'))}>*</Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button color="error" onClick={() => dispatch(doAction(action))}>=</Button>
            <Button color="error" onClick={() => dispatch(setMemory('0'))}>0</Button>
            <Button color="error" onClick={() => dispatch(clearBoard())}>~</Button>
            <Button color="error" onClick={() => dispatch(setAction('/'))}>/</Button>
          </ButtonGroup>
        </Container>
      </div>
    </Container>
  );
}
export default Calculator;
