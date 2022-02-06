/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React, { useRef } from 'react'
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

function Calculator() {
  const memory = useAppSelector(selectMemory)
  const value = useAppSelector(selectValue)
  const action = useAppSelector(selectAction)
  const lastMove = useAppSelector(selectLastmove)
  const color = useAppSelector(selectColor)
  const dispatch = useAppDispatch()
  const bugAction = (x: string) => {
    if (memory.length > 0 && action.length > 0) {
      dispatch(doAction(action))
      dispatch(setAction(''))
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
  const test: any = useRef('initial')
  return (
    <Container id="calculator">
      <div ref={test} className="board">
        <h6 style={{ height: '20px' }}>{lastMove}</h6>
        <hr />
        <h3 style={{ height: '20px' }}>{value}</h3>
        <h3 style={{ height: '20px' }}>{action}</h3>
        <h3 style={{ height: '20px' }}>{memory}</h3>
      </div>
      <div>
        <Container>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('1'))}
          >
            1
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('2'))}
          >
            2
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('3'))}
          >
            3
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => bugAction('-')}
          >
            -
          </Button>
        </Container>
        <Container>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('4'))}
          >
            4
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('5'))}
          >
            5
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('6'))}
          >
            6
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => bugAction('+')}
          >
            +
          </Button>
        </Container>
        <Container>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('7'))}
          >
            7
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('8'))}
          >
            8
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('9'))}
          >
            9
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => bugAction('*')}
          >
            *
          </Button>
        </Container>
        <Container>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => bugAction(action)}
          >
            =
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setMemory('0'))}
          >
            0
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(clearBoard())}
          >
            C
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => bugAction('/')}
          >
            /
          </Button>
        </Container>
        <Container>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(backspace())}
          >
            DEL
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(floor())}
          >
            FLOOR
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(setStorage())}
          >
            m
          </Button>
          <Button
            sx={{ color: `${color}` }}
            variant="text"
            onClick={() => dispatch(getStorage())}
          >
            gm
          </Button>
        </Container>
      </div>
    </Container>
  )
}
export default Calculator
