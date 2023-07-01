/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import calculatorReducer from '../features/calculator/calculatorSlice'
import testCapturingState from '../features/testCapturingState/testCapturingStateSlice'
import testImmer from '../features/testImmer/testImmerSlice'
/* import { coinApi } from '../features/testCapturingState/testApi' */

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    testCapturingState,
    testImmer,
  },
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinApi.middleware), */
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
