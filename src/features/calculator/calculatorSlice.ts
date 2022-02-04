/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CalculatorState {
  value: string[];
}
const initialState: CalculatorState = {
  value: [],
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increaseByValue: (state, action: PayloadAction<string>) => {
      const x = state;
      const y = action.payload;
      x.value.push(y);
    },
    pop: (state) => {
      const x = state;
      x.value.pop();
    },
  },
});
export const selectValue = (state: RootState) => state.calculator.value;
export const { increaseByValue, pop } = calculatorSlice.actions;
export default calculatorSlice.reducer;
