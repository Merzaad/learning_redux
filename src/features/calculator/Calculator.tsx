/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React, { useRef } from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setMemory,
  setAction,
  doAction,
  clearBoard,
} from '../calculator/calculatorSlice';
import { selectValue, selectMemory, selectAction } from './calculatorSlice';
import './calculator.css';

function Calculator() {
  const memory = useAppSelector(selectMemory);
  const value = useAppSelector(selectValue);
  const action = useAppSelector(selectAction);
  const dispatch = useAppDispatch();
  const bugAction = (x: string) => {
    if (memory.length > 0) dispatch(doAction(x));
    else dispatch(setAction(x));
  };
  const test: any = useRef('initial');
  console.log(test.current);
  return (
    <Container id="test">
      <div ref={test} className="board">
        {value}
        <br />
        {action}
        <br />
        {memory}
      </div>
      <div>
        <Container>
          <ButtonGroup size="large">
            <Button color="success" onClick={() => dispatch(setMemory('1'))}>
              1
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('2'))}>
              2
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('3'))}>
              3
            </Button>
            <Button color="success" onClick={() => bugAction('-')}>
              -
            </Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup size="large">
            <Button color="success" onClick={() => dispatch(setMemory('4'))}>
              4
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('5'))}>
              5
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('6'))}>
              6
            </Button>
            <Button color="success" onClick={() => bugAction('+')}>
              +
            </Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup size="large">
            <Button color="success" onClick={() => dispatch(setMemory('7'))}>
              4
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('8'))}>
              5
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('9'))}>
              9
            </Button>
            <Button color="success" onClick={() => bugAction('*')}>
              *
            </Button>
          </ButtonGroup>
        </Container>
        <Container>
          <ButtonGroup size="large">
            <Button color="success" onClick={() => dispatch(doAction(action))}>
              =
            </Button>
            <Button color="success" onClick={() => dispatch(setMemory('0'))}>
              0
            </Button>
            <Button color="success" onClick={() => dispatch(clearBoard())}>
              C
            </Button>
            <Button color="success" onClick={() => bugAction('/')}>
              /
            </Button>
          </ButtonGroup>
        </Container>
      </div>
    </Container>
  );
}
export default Calculator;
