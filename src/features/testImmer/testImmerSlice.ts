/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface testInitial {
  x: { a: number[] }
  y: { b: number[] }
  z: { a: { i: number }; b: { j: number } }
}

const initialState: testInitial = {
  x: { a: [1, 2] },
  y: { b: [] },
  z: { a: { i: 1 }, b: { j: 2 } },
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
    testNestedUpdate: (state) => {
      state.z.a.i += 1
    },
  },
})
export const selectImmerTest = (state: RootState) => state.testImmer

export const { setImmerTest, testImmerTest, printImmerTest, testNestedUpdate } = testSlice.actions

export default testSlice.reducer
