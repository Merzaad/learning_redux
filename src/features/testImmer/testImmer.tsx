/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import * as React from 'react'
import { useDispatch } from 'react-redux'
import { printImmerTest, setImmerTest, testImmerTest } from './testImmerSlice'

export default function TestImmer() {
  const dispatch = useDispatch()
  return (
    <div>
      <button type="button" onClick={() => dispatch(setImmerTest())}>
        setImmerTest
      </button>
      <button type="button" onClick={() => dispatch(testImmerTest())}>
        testImmerTest
      </button>
      <button type="button" onClick={() => dispatch(printImmerTest())}>
        printImmerTest
      </button>
    </div>
  )
}
