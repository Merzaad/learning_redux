/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface testInitial {
  a: number
  /* b: (a: number) => number */
  testStale: number
}

const initialState: testInitial = {
  a: 0,
  /*  b: (a: number) => a + 1, */
  testStale: 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increaseTest: (state) => {
      state.testStale += 1
    },
  },
})

export const selectTest = (state: RootState) => state.test.testStale

export const { increaseTest } = testSlice.actions

export default testSlice.reducer
