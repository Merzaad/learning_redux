/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface CalculatorState {
  value: number
  memory: string[]
  action: string
  lastMove: string
  color: string | 'mediumspringgreen'
}
const initialState: CalculatorState = {
  value: 0,
  action: '',
  memory: [],
  lastMove: '',
  color:
    localStorage.getItem('color') == null
      ? 'mediumspringgreen'
      : String(localStorage.getItem('color')),
}
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    doAction: (state, action: PayloadAction<string>) => {
      const x = state
      const y = action.payload
      const z = Number(x.memory.join(''))
      x.lastMove = x.value + y + z
      if (!Number.isNaN(z)) {
        switch (y) {
          case '+':
            x.value += Number(x.memory.join(''))
            x.action = ''
            x.memory = []
            break
          case '-':
            x.value -= Number(x.memory.join(''))
            x.action = ''
            x.memory = []
            break
          case '/':
            if (x.memory[0] === '0') {
              x.lastMove = ' /0 not allowd'
              x.memory = []
              break
            } else {
              x.value /= Number(x.memory.join(''))
              x.action = ''
              x.memory = []
              break
            }
          case '*':
            x.value *= Number(x.memory.join(''))
            x.action = ''
            x.memory = []
            break
          default:
            x.lastMove = 'choose action'
        }
      } else {
        x.lastMove = 'Not a Number'
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
      x.lastMove = ''
    },
    clearMemory: (state) => {
      const x = state
      x.memory = []
    },
    setLastmove: (state, action: PayloadAction<string>) => {
      const x = state
      x.lastMove = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      const x = state
      x.color = action.payload
      localStorage.setItem('color', action.payload)
    },
    floor: (state) => {
      const x = state
      x.value = Math.floor(x.value)
    },
    backspace: (state) => {
      const x = state
      if (x.memory.length > 0) x.memory.pop()
      else x.action = ''
    },
    setStorage: (state) => {
      const x = state
      if (x.memory.length > 0) localStorage.setItem('value', x.memory.join(''))
      else localStorage.setItem('value', String(x.value))
    },
    getStorage: (state) => {
      const x = state
      const y = []
      const z = String(localStorage.getItem('value'))
      for (let i = 0; i < z.length; i += 1) {
        y.push(z[i])
      }
      x.memory = y
    },
  },
})
export const selectValue = (state: RootState) => state.calculator.value
export const selectMemory = (state: RootState) => state.calculator.memory
export const selectAction = (state: RootState) => state.calculator.action
export const selectLastmove = (state: RootState) => state.calculator.lastMove
export const selectColor = (state: RootState) => state.calculator.color
export const {
  doAction,
  setMemory,
  setAction,
  clearBoard,
  clearMemory,
  setLastmove,
  setColor,
  floor,
  backspace,
  setStorage,
  getStorage,
} = calculatorSlice.actions
export default calculatorSlice.reducer
