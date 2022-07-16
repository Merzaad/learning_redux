import { createSlice } from '@reduxjs/toolkit'

export interface testInitial {
  a: number
  b: (a: number) => number
}

const initialState: testInitial = {
  a: 0,
  b: (a: number) => a + 1,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
})

export default testSlice.reducer
