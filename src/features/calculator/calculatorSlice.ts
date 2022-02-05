/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface CalculatorState {
  value: number
  memory: string[]
  action: string
  lastMove: string
}
const initialState: CalculatorState = {
  value: 0,
  action: '',
  memory: [],
  lastMove: '',
}
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    doAction: (state, action: PayloadAction<string>) => {
      const x = state
      const y = action.payload
      x.lastMove = x.value + y + Number(x.memory.join(''))
      switch (y) {
        case '+':
          x.value += Number(x.memory.join(''))
          x.memory = []
          x.action = ''
          break
        case '-':
          x.value -= Number(x.memory.join(''))
          x.memory = []
          x.action = ''
          break
        case '/':
          if (x.memory[0] === '0') {
            alert('division by zero')
            x.memory = []
            break
          } else {
            x.value /= Number(x.memory.join(''))
            x.memory = []
            x.action = ''
            break
          }
        case '*':
          x.value *= Number(x.memory.join(''))
          x.memory = []
          x.action = ''
          break
        default:
          alert('choose an action')
      }
    },
    setMemory: (state, action: PayloadAction<string>) => {
      const x = state
      const y = action.payload
      if (x.memory.length < 20) x.memory.push(y)
    },
    setAction: (state, action: PayloadAction<string>) => {
      const x = state
      const y = action.payload
      x.action = y
    },
    clearBoard: (state) => {
      const x = state
      x.value = 0
      x.memory = []
      x.action = ''
    },
    clearMemory: (state) => {
      const x = state
      x.memory = []
    },
  },
})
export const selectValue = (state: RootState) => state.calculator.value
export const selectMemory = (state: RootState) => state.calculator.memory
export const selectAction = (state: RootState) => state.calculator.action
export const selectLastmove = (state: RootState) => state.calculator.lastMove
export const {
  doAction, setMemory, setAction, clearBoard, clearMemory,
} = calculatorSlice.actions
export default calculatorSlice.reducer
