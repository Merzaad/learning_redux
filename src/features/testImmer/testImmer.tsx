/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  printImmerTest,
  selectImmerTest,
  setImmerTest,
  testImmerTest,
  testNestedUpdate,
} from './testImmerSlice'

export default function TestImmer() {
  const dispatch = useDispatch()
  const testImmer = useSelector(selectImmerTest)
  React.useEffect(() => {
    console.log('test')
  }, [testImmer.z.b])
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
      <button type="button" onClick={() => dispatch(testNestedUpdate())}>
        testNestedUpdate
      </button>
    </div>
  )
}
