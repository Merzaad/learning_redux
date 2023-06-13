/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseTest, selectTest } from './testSlice'

let testStale2 = 0
export default function Test() {
  const dispatch = useDispatch()
  const testStale = useSelector(selectTest)
  const [testStale3, setTestStale3] = React.useState(0)
  const [x, setX] = React.useState(false)
  const [y, setY] = React.useState(false)
  const [z, setZ] = React.useState(false)
  const promise = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale), 1500)
    })
  const promise2 = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale2), 1500)
    })
  const promise3 = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale3), 1500)
    })
  React.useEffect(() => {
    promise().then((r) => console.log(r))
  }, [x])
  React.useEffect(() => {
    promise2().then((r) => console.log(r))
  }, [y])
  React.useEffect(() => {
    promise3().then((r) => console.log(r))
  }, [z])
  return (
    <div>
      <div>
        <button type="button" onClick={() => setX(!x)}>
          toggle Redux
        </button>
        <button type="button" onClick={() => dispatch(increaseTest())}>
          {testStale}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setY(!y)}>
          toggle let
        </button>
        <button
          type="button"
          onClick={() => {
            testStale2 += 1
          }}
        >
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setZ(!z)}>
          toggle state
        </button>
        <button type="button" onClick={() => setTestStale3((prev) => prev + 1)}>
          {testStale3}
        </button>
      </div>
    </div>
  )
}
