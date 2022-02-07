/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react'
import { Button, Container } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  setMemory,
  setAction,
  doAction,
  clearBoard,
  clearMemory,
  selectLastmove,
  floor,
  backspace,
  setStorage,
  getStorage,
  selectColor,
  setLastmove,
} from '../calculator/calculatorSlice'
import { selectValue, selectMemory, selectAction } from './calculatorSlice'
import './calculator.css'

function Key(props: any) {
  const color = useAppSelector(selectColor)
  const { act, text } = props
  return (
    <Button
      sx={{ color: `${color}`, fontSize: '20px' }}
      variant="text"
      onClick={act}
    >
      {text}
    </Button>
  )
}

function Calculator() {
  const memory = useAppSelector(selectMemory)
  const value = useAppSelector(selectValue)
  const action = useAppSelector(selectAction)
  const lastMove = useAppSelector(selectLastmove)
  const dispatch = useAppDispatch()
  const bugAction = (x: string) => {
    if (memory.length > 0 && action.length > 0) {
      dispatch(doAction(action))
      dispatch(setAction(x))
      dispatch(clearMemory())
    } else if (!lastMove) {
      dispatch(doAction('+'))
      dispatch(setAction(x))
      dispatch(clearMemory())
    } else if (memory.length === 0 && action.length === 0) {
      dispatch(setAction(x))
    } else if (memory.length === 0 && action.length > 0) {
      dispatch(setAction(x))
    } else if (memory.length > 0 && action.length === 0) {
      dispatch(doAction(x))
    } else {
      dispatch(setLastmove('bugAction else'))
    }
  }
  return (
    <Container id="calculator">
      <div className="board">
        <h6 style={{ height: '20px' }}>{lastMove}</h6>
        <hr />
        <h3 style={{ height: '20px' }}>{value}</h3>
        <h3 style={{ height: '20px' }}>{action}</h3>
        <h3 style={{ height: '20px' }}>{memory}</h3>
      </div>
      <div>
        <div className="keyboard">
          <Key text="1" act={() => dispatch(setMemory('1'))} />
          <Key text="2" act={() => dispatch(setMemory('2'))} />
          <Key text="3" act={() => dispatch(setMemory('3'))} />
          <Key text="-" act={() => bugAction('-')} />
        </div>
        <div className="keyboard">
          <Key text="4" act={() => dispatch(setMemory('4'))} />
          <Key text="5" act={() => dispatch(setMemory('5'))} />
          <Key text="6" act={() => dispatch(setMemory('6'))} />
          <Key text="+" act={() => bugAction('+')} />
        </div>
        <div className="keyboard">
          <Key text="7" act={() => dispatch(setMemory('7'))} />
          <Key text="8" act={() => dispatch(setMemory('8'))} />
          <Key text="9" act={() => dispatch(setMemory('9'))} />
          <Key text="*" act={() => bugAction('*')} />
        </div>
        <div className="keyboard">
          <Key text="=" act={() => bugAction('')} />
          <Key text=" 0" act={() => dispatch(setMemory('0'))} />
          <Key text=" C" act={() => dispatch(clearBoard())} />
          <Key text="/" act={() => bugAction('/')} />
        </div>
        <div className="keyboard">
          <Key text="DEL" act={() => dispatch(backspace())} />
          <Key text="FL" act={() => dispatch(floor())} />
          <Key text="M" act={() => dispatch(setStorage())} />
          <Key text="GM" act={() => dispatch(getStorage())} />
        </div>
      </div>
    </Container>
  )
}
export default Calculator
