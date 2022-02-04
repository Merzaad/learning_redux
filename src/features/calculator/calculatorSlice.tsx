import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface CalculatorState {
  value: number;
}
const initialState: CalculatorState = {
  value: 0,
}
export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {

  }
})

export const selectValue = (state: RootState) => state.calculator.value
export default calculatorSlice.reducer
