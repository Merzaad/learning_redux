/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import calculatorReducer from '../features/calculator/calculatorSlice'
import testReducer from '../features/test/testSlice'
import { coinApi } from '../features/test/testApi'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    test: testReducer,
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
