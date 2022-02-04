/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CalculatorState {
  value:number;
  memory: string[];
  action:string;

}
const initialState: CalculatorState = {
  value: 0,
  action: '',
  memory: [],
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    doAction: (state, action: PayloadAction<string>) => {
      const x = state;
      const y = action.payload;
      switch (y) {
        case '+':
          x.value += Number(x.memory.join(''));
          x.memory = [];
          x.action = '';
          break;
        case '-':
          x.value -= Number(x.memory.join(''));
          x.memory = [];
          x.action = '';
          break;
        case '/':
          x.value /= Number(x.memory.join(''));
          x.memory = [];
          x.action = '';
          break;
        case '*':
          x.value *= Number(x.memory.join(''));
          x.memory = [];
          x.action = '';
          break;
        default:
          alert('error reducer');
      }
    },
    setMemory: (state, action: PayloadAction<string>) => {
      const x = state;
      const y = action.payload;
      x.memory.push(y);
    },
    setAction: (state, action: PayloadAction<string>) => {
      const x = state;
      const y = action.payload;
      x.action = y;
    },
  },
});
export const selectValue = (state: RootState) => state.calculator.value;
export const selectMemory = (state: RootState) => state.calculator.memory;
export const selectAction = (state: RootState) => state.calculator.action;
export const { doAction, setMemory, setAction } = calculatorSlice.actions;
export default calculatorSlice.reducer;
