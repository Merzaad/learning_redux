/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface testInitial {
  x: { a: number[] }
  y: { b: number[] }
}

const initialState: testInitial = {
  x: { a: [1, 2] },
  y: { b: [] },
}

export const testSlice = createSlice({
  name: 'testImmer',
  initialState,
  reducers: {
    setImmerTest: (state) => {
      state.y.b = state.x.a
    },
    testImmerTest: (state) => {
      state.y.b.push(1)
    },
    printImmerTest: (state) => {
      console.log(Object.is(state.y.b, state.x.a))
    },
  },
})

export const selectTest = (state: RootState) => state.test.testStale

export const { setImmerTest, testImmerTest, printImmerTest } = testSlice.actions

export default testSlice.reducer
